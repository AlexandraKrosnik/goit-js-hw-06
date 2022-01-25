function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  inputNumber: document.querySelector('[type="number"]'),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.getElementById("boxes"),
}
let amountDiv;
let arrDiv;
let widthHeigthDiv;

ref.buttonCreate.addEventListener("click", onMakeCollection);
ref.buttonDestroy.addEventListener("click", destroyBoxes);

const valueFromInput = () => ref.inputNumber.value === "" ? alert("Введіть число!") : amountDiv = Number(ref.inputNumber.value);

const defaultValue = () => {
  amountDiv = 0;
  arrDiv = [];
  widthHeigthDiv = 30;
}

function createBoxes(amount) {
  if (amount != 0)
  {
    for (let i = 0; i < amount; i += 1)
    {
      let div = document.createElement("div");
      div.style.width = `${widthHeigthDiv}px`;
      div.style.height = `${widthHeigthDiv}px`;
      div.style.backgroundColor = getRandomHexColor();

      arrDiv.push(div);
      
      widthHeigthDiv += 10;
    }
  }
}

function onMakeCollection() {

  defaultValue();

  valueFromInput();
  createBoxes(amountDiv); 

  ref.inputNumber.value = "";
  
  ref.boxes.append(...arrDiv);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}