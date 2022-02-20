addList = (e) => {
  e.preventDefault();
  const inputBox = document.getElementById("text-box");

  let itemContainer = document.createElement("div");
  itemContainer.className = "item";
  itemContainer.innerHTML = `
    <p>${inputBox.value}</p>
    <button>-</button>
    `;

  let listContainer = document.getElementById("list-container");
  listContainer.appendChild(itemContainer);

  inputBox.value = "";
  itemContainer.addEventListener("click", () => {
    listContainer.removeChild(itemContainer);
  });
};
