addList = (e) => {
  e.preventDefault();
  const inputBox = document.getElementById("text-box");

  let pTag = document.createElement("p");
  pTag.innerText = inputBox.value;

  let minBtn = document.createElement("BUTTON");
  minBtn.innerText = "-";

  let itemContainer = document.createElement("div");
  itemContainer.className = "item";
  itemContainer.appendChild(pTag);
  itemContainer.appendChild(minBtn);

  let listContainer = document.getElementById("list-container");
  listContainer.appendChild(itemContainer);

  inputBox.value = "";
  minBtn.addEventListener("click", () => {
    listContainer.removeChild(itemContainer);
  });
};
