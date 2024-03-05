var str = prompt("Введите свое имя");
console.log("Меня зовут " + str);

var age = prompt("Сколько вам лет");
console.log("Мне " + age);

var plus = prompt("Решите пример 8 + 13");
console.log(
  "Ваш ответ примера 8 + 13 = " + plus + " А правильный ответ: " + (8 + 13)
);

var minus = prompt("Решите пример 2 - 19");
console.log("Ваш ответ примера 2 - 19 = "  + minus + " А правельный ответ " + (2 - 19));

var multiplier = prompt("Решите пример 35*42");
console.log("Ваш ответ примера 35 * 42 = "  + multiplier + " А правельный ответ " + (35 * 42));

var division = prompt("Решите пример 42 / 3");
console.log("Ваш ответ примера 42 / 3 = "  + division + " А правельный ответ " + (42 / 3));

var residue = prompt("Решите пример 50 % 4");
console.log("Ваш ответ примера 50 % 4 = "  + residue + " А правельный ответ " + (50 % 4));

var first = +prompt("Введите первое число");
console.log(first);

var second = +prompt("Введите второе число");
console.log(second);

var third = +prompt("Введите третье число");
console.log(third);

var result = first + second + third;

console.log("Среднее арифмитическое: " + (result / 3));

