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


function randomUserGame() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let sortWords = words.sort(func);
    function func() {
        return 0.5 - Math.random();
    }
    alert(sortWords);
    let firstWord = prompt('Введите первое слово');
    let secondWord = prompt('Введите последнее слово');
    if (firstWord.toLowerCase() === sortWords[0].toLowerCase()) {
        alert('Первое слово угадано верно');
    }
    else {
        alert('Первое слово названо не верно');
    }
    if (secondWord.toLowerCase() === sortWords[sortWords.length - 1].toLowerCase()) {
        alert('Второе слово угадано верно');
    }
    else {
        alert('Второе слово названо не верно');
    }
}