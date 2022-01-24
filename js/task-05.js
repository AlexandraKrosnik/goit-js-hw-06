const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

let onChangeName = (event) => nameEl.textContent = event.currentTarget.value===""?"Anonymous":event.currentTarget.value;

inputEl.addEventListener("input", onChangeName);