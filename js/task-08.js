const ref = {
    formLogin: document.querySelector(".login-form"),
    emailInput: document.querySelector('[name="email"]'),
    passwordInput: document.querySelector('[name="password"]'),    
}

const formData = {};

const isInputEmpty = () => ref.emailInput.value === "" || ref.passwordInput.value === "";

const displayMessage = () => isInputEmpty() && alert("Please fill in all the fields!");

const makeObjectData = ({emailInput,  passwordInput}) =>
{
    let typeEmail = emailInput.getAttribute("type");
    let typePassword = passwordInput.getAttribute("type");
    formData[typeEmail] = emailInput.value;
    formData[typePassword] = passwordInput.value;
}

const handleSubmit = (event) => {
    event.preventDefault();
    if (displayMessage()===false)
    {
        makeObjectData(ref);
    }
    console.log(formData);
    ref.formLogin.reset();
}

ref.formLogin.addEventListener("submit", handleSubmit);

