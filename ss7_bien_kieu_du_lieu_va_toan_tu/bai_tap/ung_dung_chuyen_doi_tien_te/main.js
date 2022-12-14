const btnElement = document.querySelector('.form-btn');

function convertMoney() {
    const inputElement = document.querySelector('.form-input').value;
    const select1 = document.querySelector('#select1').value;
    const select2 = document.querySelector('#select2').value;
    const result = document.querySelector('.result span');

    if (Number.parseInt(inputElement)) {
        if (select1 == select2) {
            if (select1 === '1' && select2 === '1') {
                result.innerHTML = `${inputElement} VND`;
            } else if (select1 === '2' && select2 === '2') {
                result.innerHTML = `${inputElement} USD`;
            }
        } else if (select1 === '1' && select2 === '2') {
            result.innerHTML = `${(inputElement / 24815)} USD`;
        } else if (select1 === '2' && select2 === '1') {
            result.innerHTML = `${(inputElement * 24815)} VND`;
        }
    } else {
        result.innerHTML = 'Invalid value! Please enter again.';
    }
}

btnElement.addEventListener('click', function (e) {
    convertMoney();
    e.preventDefault();
});
