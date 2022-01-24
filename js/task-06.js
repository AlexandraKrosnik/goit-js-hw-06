const inputEl = document.querySelector("#validation-input");

const INPUT_LENGTH = inputEl.getAttribute('data-length');


const inputClassList = inputEl.classList;

const correctInputValueLength = () => inputClassList.contains("invalid") ? inputClassList.replace("invalid", "valid") : inputClassList.add("valid");
const incorrectInputValueLength = () => inputClassList.contains("valid") ? inputClassList.replace("valid", "invalid") : inputClassList.add("invalid");

const onCheckInputLength = () => inputEl.value.length <= INPUT_LENGTH ? correctInputValueLength() : incorrectInputValueLength();

inputEl.addEventListener("blur", onCheckInputLength);
console.log(inputEl.value.length === INPUT_LENGTH )