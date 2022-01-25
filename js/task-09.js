function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  nameColorSpan: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
  body: document.body,
}

const onColorBackgroundChange = () => {
  let color = getRandomHexColor();
  ref.body.style.backgroundColor = color;
  ref.nameColorSpan.textContent = color;
}

ref.buttonChangeColor.addEventListener("click", onColorBackgroundChange);



