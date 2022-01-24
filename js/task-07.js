const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const onFontSizeChenge = (event) => textEl.style.fontSize = `${event.currentTarget.value}px`;

inputRangeEl.addEventListener("input", onFontSizeChenge);