
let counterValue = 0;
const valueEl = document.querySelector("#value");
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');



const onDecremantValue = () => {
    counterValue -= 1;
    valueChange();
};
const onIncrementValue = () => {
    counterValue += 1;
    valueChange();
};

const valueChange = () => valueEl.textContent = counterValue;


buttonDecrementEl.addEventListener("click", onDecremantValue);
buttonIncrementEl.addEventListener("click", onIncrementValue);