const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ingredientsEl = document.querySelector("#ingredients");
let itemArr = ingredients.map(ingredient => createItem(ingredient));

ingredientsEl.append(...itemArr);

function createItem(ingredient) {
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;  
  return item;
}

