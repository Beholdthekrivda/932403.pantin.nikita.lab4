const userNameInput = prompt("Введите ваше имя:");

// Если пользователь ничего не ввёл или нажал Отмена, используем имя по умолчанию
const userName =
  userNameInput !== null && userNameInput.trim() !== ""
    ? userNameInput.trim()
    : "гость";

// Массив из 7 чисел — калорийность блюд в ккал
const calories = [250, 450, 650, 300, 800, 150, 720];

function findMax(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(...arr);
}
function filterHighCalorie(arr) {
  return arr.filter(cal => cal > 600);
}

function calculateSum(arr) {
  return arr.reduce((sum, cal) => sum + cal, 0);
}

let lowCalorieCount = 0;

for (let i = 0; i < calories.length; i++) {
  if (calories[i] <= 300) {
    lowCalorieCount++;
  }
}

const lowCalorieShare =
  calories.length > 0
    ? (lowCalorieCount / calories.length) * 100
    : 0;

// Основные расчёты
const totalCalories = calculateSum(calories);
const highCalorieDishes = filterHighCalorie(calories);
const highCalorieSum = calculateSum(highCalorieDishes);
const maxCalories = findMax(calories);

// Вывод через alert: приветствие и требуемое сообщение
alert(
  `Привет, ${userName}! Суммарная калорийность – ${totalCalories} ккал, из них ${highCalorieSum} ккал – в высококалорийных блюдах.`
);

console.log("Исходный массив калорийности:", calories);
console.log(`Максимальная калорийность одного блюда: ${maxCalories} ккал`);
console.log(`Количество низкокалорийных блюд (≤ 300 ккал): ${lowCalorieCount}`);
console.log(`Доля низкокалорийных блюд: ${lowCalorieShare.toFixed(1)}%`);

if (totalCalories > 3000) {
  console.log("Такой рацион лучше распределить на 2 дня.");
}