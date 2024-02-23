//----------------------------------------------------------HW-2------------------------------------

 //-----------task 1--------------
 let a = 10;
 alert(a);
 a = 20;
 alert(a);

 //-----------task 2--------------
 const yearFirstIPhone = 2007;
 alert(yearFirstIPhone);

 //--------------task 3-----------
 const nameCreatorJavaScript = 'Брендан Эйх';
 alert(nameCreatorJavaScript);

 /* P.S. JavaScript был создан компанией Netscape в 1995 году
 и быстро стал одним из самых популярных языков
 программирования благодаря своей простоте и
 широкому применению.JavaScript
 был создан Бренданом Эйком,
 который работал над разработкой языка,
 названного Mocha. Американский программист,
 создатель языка программирования JavaScript.
 Родился 4 июля 1961 года в Питтсбурге, штат Пенсильвания.
 Эйх начал карьеру в Silicon Graphics, где проработал семь лет.
 Следующие три года проработал в MicroUnity Systems Engineering.
 Больше всего известен своей работой в Netscape и Mozilla.
 Он начал работу в Netscape в апреле 1995 года,
 где разработал язык программирования,
 изначально называвшийся «Mocha», затем переименованный
 в «LiveScript» и наконец переименованный в JavaScript
 для браузера Netscape Navigator.*/

 //---------------task 4------------
 let number1 = 10;
 let number2 = 2;
 let summa = number1 + number2;
 let difference = number1 - number2;
 let product = number1 * number2;
 let quotient = number1 / number2;
 alert("Сумма number1 и number2 равна " + summa + ";\n" + "Разность number1 и number2 равна " + difference + ";\n" +
     "Произведение number1 и number2 равно " + product + ";\n" + "Кратное при делении number1 на number2 равно " +
     quotient);

 //--------------------task 5-----------
 let result = 2 ** 5;
 alert(result);

 //------------------task 6---------------
 a = 9;
 let b = 2;
 alert(a % b);

 //-------------task 7--------------
 let num = 1;
 num += 5;
 num -= 3;
 num *= 7;
 num /= 3;
 num++;
 num--;
 alert(num);

 //-------------task 8-------------
 let age = prompt('Сколько вам лет?');
 alert(age);

 //------------task 9.0-------------
 let user = {
     name: "Oleg",
     age: 36,
     usAdmin: true
 };

 //-----------task 9.1--------------
 user['city of residence'] = 'Murmansk region';

 //-----------task 9.2--------------
 user['age'] = 8;

 //-----------task 9.3--------------
 delete user['city of residence'];

 //------------task 9.4-----------
 let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
 alert(user[info]);

 //-----------task 10-----------
 let whatsYourName = prompt('Введите Ваше имя');
 alert('Привет, ' + whatsYourName.toUpperCase() + '!');
 
 
 //-----------------------------------------------------------HW 3------------------------------------------
 
  //------------task 1--------------------
        let password = 'пароль';
        let userPassword = prompt('Введите пароль');
        if (password == userPassword) alert('Пароль введен верно');
        else alert('Пароль введен неправильно');

        //--------------task 2---------------------
        let c = 2;
        if (c > 0 && c < 10) console.log('Верно');
        else console.log('Не верно');

        //--------------task 3--------------------
        let d = 300;
        let e = 700;
        if (d > 100 || e > 100) console.log('Верно');
        else console.log('Не верно');

        //-----------------task 4------------------
        let a = '2';
        let b = '3';
        // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
        alert(Number(a) + Number(b));

        //-----------------task 5-----------------
        let monthNumber = 12;
        switch (monthNumber) {
            case 1:
            case 2:
            case 12:
                alert('Зима');
                break;
            case 3:
            case 4:
            case 5:
                alert('Весна');
                break;
            case 6:
            case 7:
            case 8:
                alert('Лето');
                break;
            case 9:
            case 10:
            case 11:
                alert('Осень');
                break;
            case (monthNumber >= 13):
                alert('Не правильно указан номер месяца');
                break;
            default: ('Извините, что-то пошло не так');
        }

        //-------------task-7-----------------
        let num = Number(prompt('Пожалуйста, введите любое число'));
        if (isNaN(num)) {
            alert('Введенное значение не является числом');
        }
        else {
            if (num % 2 == 0) {
                alert('Число четное');
            }
            else {
                alert('Число нечетное');
            }
        }

        //-------------task-8---------------
        let clientOS = 1;
        if (clientOS == 0) console.log('Установите версию приложения для iOS по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
        if (clientOS == 1) console.log('Установите версию приложения для Android по ' + "<a href=\"#\">" + 'ссылке' + "</a>");

        //------------task-9--------------
        let clientDeviceYear = 2015;
        if (clientOS = 0 && clientDeviceYear < 2015) console.log('Установите облегченную версию приложения для iOS по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
        else if (clientOS = 1 && clientDeviceYear < 2015) console.log('Установите облегченную версию приложения для Android по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
        else if (clientOS == 0) console.log('Установите версию приложения для iOS по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
        else console.log('Установите версию приложения для Android по ' + "<a href=\"#\">" + 'ссылке' + "</a>");
		
//--------------------------------------------------------HW 4----------------------------------------------------

 //-----------task-1--------------
            for (let i = 1; i <= 2; i++) {
                console.log('Привет');
            }

            //-----------task-2----------------
            let i = 1;
            while (i < 6) {
                console.log(i);
                i++;
            }

            //-------------task-3-----------------
            for (i = 1; i < 23; i++) {
                if (i < 7) continue;
                console.log(i);
            }

            //---------------task-4--------------
            const obj = {
                "Коля": '200',
                "Вася": '300',
                "Петя": '400'
            }

            for (key in obj) {
                console.log(key + " — зарплата " + obj[key] + " долларов");
            }

            //---------------task - 5-------------
            let n = 1000;
            let num = 0;
            do {
                n /= 2;
                num++;
            }
            while (n > 50);
            console.log(n + '\n' + num);

            //---------------task-6--------------
            for (let numFirstFriday = 2; numFirstFriday <= 31; numFirstFriday += 7) {
                console.log("Сегодня пятница, " + numFirstFriday +"-е число. Необходимо подготовить отчет.");
            }