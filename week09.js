//Задание 1
//Выведи в консоль строку: "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"
console.log("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!");

//Задание 2
//Выведи в консоль свое имя.
const userName= 'Елизавета';
console.log(userName);

//Задание 3
//Выведи в консоль номер месяца в котором ты родилась. Изучи чем отличается вывод числа и строки.
console.log (2);

//Задание 4
//Выведи в консоль строку: 'Добро '+'пожаловать, '+ твое имя</p>. Например, 'Добро '+'пожаловать, ' + 'Алиса'
console.log ('Добро '+'пожаловать, ' + 'Елизавета');
//Задание 5
//Сложи слово 'Владивосток' и число 2000, а также добавь между ними пробел, чтобы получилось название известной песни. Результат выведи в консоль.
console.log ('Владивосток ' + 2000);
//Задание 6
//С помощью alert выведи число 2023.
//После срабатывания кода - его можно закомментировать, чтобы он не мешал для дальнейшей разработки.
let num = 2023;
//alert(num);
//Задание 7
//С помощью console.log выведи результат операции 2023 + 1. Проверь результат в консоли.
let x = 1;
console.log(num + x);
//Задание 8
//Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере, 254 минуты лайкала фотокарточки, 137 минут читала статьи в Википедии и 201 минуту смотрела стендапы на YouTube. Выведи в консоль, сколько часов прокрастинировала Русалка.
//Не нужно самостоятельно суммировать числа, пусть JS сделает это за тебя ;)
let a = 128,
b = 254,
c = 137,
d = 201;
console.log (a + b + c + d);
//Задание 9
//Зарплата вечернего уборщика в городской поликлинике 40000 рублей, а педагога по вокалу 22000 рублей. Выведи в консоль, сколько можеn зарабатывать вечерний уборщик, имея голос и педагогическое образование?
let salaryCleaner = 40000;
let salaryTutor = 22000;
console.log(salaryCleaner + salaryTutor);
//Задание 10
//У тебя есть две переменные:
//const greetings = "Привет";
//const name = "Кот";
//Склей значение этих двух переменных и выведи на экран значение «Привет, Кот».
!(function () {
    const greetings = "Привет";
    const name = "Кот";
    console.log (greetings + ' ' + name);
})();
const greetings = "Привет";
const name = "Кот";
console.log (greetings + ' ' + name);



//Задание 11
//Объяви переменную с именем fahrenheit и положи в неё значение 451.
let fahrenheit = 451;
//Добавь новую переменную celsius и запиши в неё значение, рассчитанное по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия:
//(fahrenheit - 32) / 1.8;
let celsius = (fahrenheit - 32) / 1.8;

//Применив переменные и шаблонные строки, выведи в консоль строку, где _fahrenheit_и _celsius_ — это значения соответствующих переменных:
//'_fahrenheit_ градуса по Фаренгейту — это _celsius_ градуса по Цельсию.'
console.log (Number(fahrenheit) + ' градуса по Фаренгейту — это ' + Number(celsius) + ' градуса по Цельсию.')
//Задание 12
//Запиши в переменную '15' как строку и выведи в консоль.
let fifteen = '15';
console.log (fifteen);
//Затем преобразуй эту переменную в число и выведи ее как число.
console.log (Number(fifteen));
//Проверь себя с помощью typeof.
console.log(typeof((Number(fifteen))));




