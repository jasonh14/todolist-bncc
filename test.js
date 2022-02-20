addList = (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("text-box").value;

  let itemContainer = document.createElement("div");
  itemContainer.className = "item";

  itemContainer.innerHTML = `
  <p>${inputValue}</p>
  <button>-</button>
  `;

  let listContainer = document.getElementById("list-container");
  listContainer.appendChild(itemContainer);
};
