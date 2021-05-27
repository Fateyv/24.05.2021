function createCalculator(num) {
    let calcResult = num;
    return {
        sum: (value) => (calcResult = calcResult + value),
        mult: (value) => (calcResult = calcResult * value),
        sub: (value) => (calcResult = calcResult - value),
        div: (value) => (calcResult = calcResult / value),
        set: (value) => (calcResult = value)
    }
}

function getNumber(message) {
    let answerNumber = '';
    do {
        answerNumber = prompt(message);
    } while (isNaN(answerNumber))
    return +answerNumber;
}


const number = getNumber('Enter the number');
const calc = createCalculator(number);

alert(calc.sum(5)); /// 15
alert(calc.mult(10)); // 150
alert(calc.sub(40)); // 110
alert(calc.div(10)); // 11
alert(calc.set(100)); //