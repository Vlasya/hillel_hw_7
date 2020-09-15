// Задача: Создание массива значений Фаренгейта из массива значений Цельсия
// let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];


let celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

let fahrenheit= celsius.map(item => item*1.8 +32
)
console.log('celsius: ', celsius);
console.log('fahrenheit: ', fahrenheit);