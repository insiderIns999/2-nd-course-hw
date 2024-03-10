function userMonthCheck() {
    let numMonth = Number(prompt('Введите номер месяца'));
    if (numMonth >= 1 && numMonth <= 12) {
        if (numMonth == 12 || numMonth == 1 || numMonth == 2) {
            alert('Зима');
        }

        else if (numMonth >= 3 && numMonth <= 5) {
            alert('Весна');
        }

        else if (numMonth >= 6 && numMonth <= 8) {
            alert('Лето');
        }

        else {
            alert('Осень');
        }
    }

    else {
        alert('Введен не корректный номер месяца');
    }
}