const result = document.querySelector('.result span');
const btnElement = document.querySelectorAll('.form-card button');

function calculator(e) {
    const inputElement1 = parseFloat(document.querySelector('#form-input1').value);
    const inputElement2 = parseFloat(document.querySelector('#form-input2').value);
    let sum = 0,
        sub = 0,
        mul = 0,
        div = 0;

    switch (e.target.innerText) {
        case 'Addition(+)':
            sum = inputElement1 + inputElement2;
            result.innerText = sum;
            break;
        case 'Subtraction(-)':
            sub = inputElement1 - inputElement2;
            result.innerText = sub;
            break;
        case 'Multiplication(X)':
            mul = inputElement1 * inputElement2;
            result.innerText = mul;
            break;
        case 'Division(/)':
            div = inputElement1 / inputElement2;
            result.innerText = div;
            break;
        default:
            console.log('Error!!');
    }
}

btnElement.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        calculator(e);
    });
});