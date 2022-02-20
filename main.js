addList = (e) => {
  e.preventDefault();
  const inputBox = document.getElementById("text-box");

  //Create <p> element
  let pTag = document.createElement("p");
  pTag.innerText = inputBox.value;

  //Create button
  let minBtn = document.createElement("BUTTON");
  minBtn.innerText = "-";

  // Create Div as a container to each individual to do list
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
