const itemsContainer = document.getElementById("items-container");
const addButton = document.getElementById("add-button");
let markAsDoneButtons = [];

const items = [
  {
    id: 1,
    title: "Title",
    description: "This is the first task",
    deadline:"date1",
    status:"pending"
  },
  {
    id: 2,
    title: "Title",
    description: "This is the second task",
    deadline:"date2",
    status:"pending"
  },
  {
    id: 3,
    title: "Title",
    description: "This is the third task",
    deadline:"date3",
    status:"pending"
  },
  {
    id: 4,
    title: "Title",
    description: "This is the fourth task",
    deadline:"date4",
    status:"pending"
  },
];

function itemCardGenerator(item) {
  return `<div class="flex column center item-card">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p>${item.deadline}</p>
            <p>${item.status}</p>
            <div class="flex space-between">
                <button class="primary-button markAsDone" item-id= ${item.id}>Mark as done</button>
                <button class="secondary-button delete" item-id= ${item.id}>delete</button>
            </div>
          </div>`;
}

function itemsLoader() {
  itemsContainer.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const itemElement = items[i];

    const itemCard = itemCardGenerator(itemElement);

    itemsContainer.innerHTML += itemCard;
  }

  markAsDoneButtons = document.querySelectorAll(".MarkAsDone");

  console.log(markAsDoneButtons);

  for (let i = 0; i < markAsDoneButtons.length; i++) {
    const button = markAsDoneButtons[i];

    button.addEventListener("click", function () {
      console.log(button.classList);
      button.classList.add("class");
      button.classList.remove("class");
      button.classList.toggle("class");

      button.getAttribute("item-id");
      console.log(items[i]);
    });
  }
}

itemsLoader();

addButton.addEventListener("click", function () {
  const newitem = {
    id: 5,
    title: "New item",
    description: "This is a new item",
    deadline:"date5",
    status:"pending"  };

  items.push(newitem);

  itemsLoader();
});
