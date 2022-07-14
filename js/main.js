const elForm = document.querySelector('.form');
const elFormInput = document.querySelector('.form-input');
const elResult = document.querySelector('.result');

elForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputNumber = elFormInput.value;
    inputNumber = inputNumber * 1;

    if (inputNumber === 0) {
        elResult.textContent = `${inputNumber}`;

    } else if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
        elResult.textContent = "FizzBazz";

    } else if (inputNumber % 3 === 0) {
        elResult.textContent = "Fizz";

    } else if (inputNumber % 5 === 0) {
        elResult.textContent = "Bazz";

    } else {
        elResult.textContent = `${inputNumber}`;
    }

});

// input 3 ga bo'linsa, Fizz chiqadi
// input 5 ga bo'linsa, Buzz chiqadi
// input 3 ga hham 5 ga ham bo'linsa, FizzBuzz chiqadi
// input 3ga ham 5ga ham bo'linmasa, inputni o'zi chiqadi
// input son bo'lmasa, yozilmaydi