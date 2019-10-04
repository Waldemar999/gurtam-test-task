const numbersContainer = document.querySelector('#numbers');
const randomNumbers = [];

for (let i = 0; i < 50; i++) {
    randomNumbers.push(Math.ceil(Math.random() * 1000));
    let option = document.createElement('option');
    option.innerHTML = randomNumbers[i];
    numbersContainer.appendChild(option);
}

const binaryNum = [];
for (let i = 0; i < randomNumbers.length; i++) {
    binaryNum.push(randomNumbers[i].toString(2));
}

const optionsArr = document.querySelectorAll('#numbers > *');
document.querySelector('#bit-buttons').addEventListener('click', (e) => {
    let target = e.target;

    if (!target.classList.contains('active')) {
        for (let i = 0; i < optionsArr.length; i++) {
            let value = binaryNum[i];
            let option = optionsArr[i];

            if (value[target.innerHTML] === '0') {
                option.style.display = 'none';
            }
        }
        target.classList.add('active');
    } else if (target.classList.contains('active')) {
        for (let i = 0; i < optionsArr.length; i++) {
            let value = binaryNum[i];
            let option = optionsArr[i];

            if (value[target.innerHTML] === '0') {
                option.style.display = 'block';
            }
        }
        target.classList.remove('active');
    }
});
