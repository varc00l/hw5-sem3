document.getElementById('drinkSelect').addEventListener('change', function() {
    const drink = this.value;
    const message = drink ? `Ви вибрали: ${drink}` : '';
    document.getElementById('drinkMessage').innerText = message;
});

function checkDay() {
    const day = document.getElementById('dayInput').value.toLowerCase();
    const workingDays = ['понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця'];
    const weekendDays = ['субота', 'неділя'];

    if (workingDays.includes(day)) {
        document.getElementById('dayMessage').innerText = `${day} - робочий день.`;
    } else if (weekendDays.includes(day)) {
        document.getElementById('dayMessage').innerText = `${day} - вихідний день.`;
    } else {
        document.getElementById('dayMessage').innerText = 'Невірно введений день тижня.';
    }
}

function checkSeason() {
    const month = parseInt(document.getElementById('monthInput').value);
    let seasonMessage;

    if (month >= 3 && month <= 5) {
        seasonMessage = 'Весна';
    } else if (month >= 6 && month <= 8) {
        seasonMessage = 'Літо';
    } else if (month >= 9 && month <= 11) {
        seasonMessage = 'Осінь';
    } else if (month === 12 || (month >= 1 && month <= 2)) {
        seasonMessage = 'Зима';
    } else {
        seasonMessage = 'Невірний номер місяця.';
    }

    document.getElementById('seasonMessage').innerText = seasonMessage;
}

function checkDaysInMonth() {
    const month = parseInt(document.getElementById('monthDaysInput').value);
    let days;

    if (month === 2) {
        days = '28 або 29 днів (високосний рік)';
    } else if ([4, 6, 9, 11].includes(month)) {
        days = '30 днів';
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        days = '31 день';
    } else {
        days = 'Невірний номер місяця.';
    }

    document.getElementById('daysInMonthMessage').innerText = days;
}

function checkTrafficLight() {
    const color = document.getElementById('colorInput').value.toLowerCase();
    let action;

    switch (color) {
        case 'червоний':
            action = 'Стоп';
            break;
        case 'зелений':
            action = 'Йти';
            break;
        case 'жовтий':
            action = 'Чекати';
            break;
        default:
            action = 'Невірний колір.';
    }

    document.getElementById('colorMessage').innerText = action;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operationSelect').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Будь ласка, введіть обидва числа.';
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Ділення на нуль неможливе!';
                break;
            default:
                result = 'Невірна операція.';
        }
    }

    document.getElementById('calcMessage').innerText = result;
}