{
let coins = 0; // Кількість монет
const hamsterElement = document.getElementById('hamster');
const playerNameElement = document.getElementById('playerName');

hamsterElement.addEventListener('click', () => {
coins += 1; // Додаємо 1 монету за клік
updateDisplay();
});

function updateDisplay() {
playerNameElement.innerText = `Монети: ${coins}`;
}

let earnings = 0;
let currentEnergy = 100;
const INITIAL_ENERGY = 100;
const ENERGY_RECOVERY_RATE = 1; // 1 енергія кожні 2 секунди
let energyInterval;

// BTC PAIRS
let btcPairsLevel = 1;
let btcPairsPrice = 150;
let profitPerHour = 100;

function updateEarningsDisplay() {
   document.getElementById('earnings').innerText = earnings.toFixed(2);
}

function updateEnergyDisplay() {
   document.getElementById('energy').innerText = currentEnergy;
}

function handleTap() {
   if (currentEnergy > 0) {
       earnings += 1; // Збільшуємо заробіток
       currentEnergy -= 1; // Витрачаємо енергію
       updateEarningsDisplay();
       updateEnergyDisplay();
   } else {
       alert("Немає енергії!");
   }
}

// Купівля BTC PAIRS
function buyBtcPairs() {
   if (earnings >= btcPairsPrice) {
       earnings -= btcPairsPrice; // Витрачаємо гроші
       updateEarningsDisplay();
       btcPairsLevel += 1; // Збільшуємо рівень
       btcPairsPrice += 100; // Збільшуємо ціну
       profitPerHour += 25; // Збільшуємо прибуток
       updateBtcPairsDisplay();
   } else {
       alert("Недостатньо грошей для купівлі BTC PAIRS!");
   }
}

function updateBtcPairsDisplay() {
   document.getElementById('btcPairsPrice').innerText = `$${btcPairsPrice}`;
   document.getElementById('profitPerHour').innerText = `$${profitPerHour}`;
   document.getElementById('btcPairsLevel').innerText = btcPairsLevel;
}

// Відновлення енергії
function startEnergyRecovery() {
   energyInterval = setInterval(() => {
       if (currentEnergy < INITIAL_ENERGY) {
           currentEnergy += ENERGY_RECOVERY_RATE; // Відновлюємо енергію
           if (currentEnergy > INITIAL_ENERGY) {
               currentEnergy = INITIAL_ENERGY; // Не перевищувати максимальне значення
           }
           updateEnergyDisplay();
       }
   }, 2000); // Кожні 2000 мс (2 секунди)
}

// Додаємо обробники для вкладок
function showTab(tabId) {
    const tabs = ['mineTabContent', 'friendsTabContent', 'earnTabContent', 'airdropTabContent'];
    tabs.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}

document.getElementById('exchangeTab').addEventListener('click', () => showTab('exchangeTabContent'));
document.getElementById('mineTab').addEventListener('click', () => showTab('mineTabContent'));
document.getElementById('friendsTab').addEventListener('click', () => showTab('friendsTabContent'));
document.getElementById('earnTab').addEventListener('click', () => showTab('earnTabContent'));
document.getElementById('airdropTab').addEventListener('click', () => showTab('airdropTabContent'));

   // Показати вибрану вкладку
   if (tabId === 'mainTab') {
       document.getElementById('gameContainer').style.display = 'flex';
       updateEnergyDisplay(); // Відображення енергії на основному екрані
   } else if (tabId === 'incomeTab') {
       document.getElementById('incomeTabContent').style.display = 'block'; // Показати вкладку погодинного доходу
   } else if (tabId === 'upgradesTab') {
       document.getElementById('upgradesTabContent').style.display = 'block'; // Показати вкладку покращень
   }else if (tabId === 'earnTab') {
    document.getElementById('earnTabContent').style.display = 'block'; // Показати вкладку погодинного доходу
   } else if (tabId === 'airdropTab') {
    document.getElementById('airdropTabContent').style.display = 'block'; // Показати вкладку покращень
   }

}

function openModal() {
   document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
   document.getElementById('modalOverlay').style.display = 'none';
}

function restartGame() {
   earnings = 0;
   currentEnergy = INITIAL_ENERGY;
   updateEnergyDisplay();
   document.getElementById('earnings').innerText = earnings;
   closeModal();
}

function deleteAccount() {
   // Додайте логіку для видалення акаунту
   alert('Акаунт видалено!');
   closeModal();
}

function chooseLanguage() {
   // Додайте логіку для вибору мови
   alert('Вибір мови!');
   closeModal();
}

// Відкриваємо налаштування при натисканні на кнопку
document.getElementById('settingsButton').addEventListener('click', openModal);

// Запустіть відновлення енергії при завантаженні
startEnergyRecovery();let tapCount = 0;
let level = 1;
const hamsterImage = document.getElementById('hamsterImage');
const levelDisplay = document.getElementById('level');

const images = [
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPtHlqcXjJ1YmfaQy2oK6Dd-BgU0xmYHXJg&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFkINkt1NlVnElHFObQMHQtGoUVNngjywzQ&s',    // Level 2 (100 taps)
'https://optim.tildacdn.com/tild3832-6332-4239-b138-646264323032/-/format/webp/mango.png'   // Level 3 (1000 taps)
];

document.getElementById('tapButton').addEventListener('click', () => {
tapCount++;

// Визначаємо новий рівень
if (tapCount >= 1000000000) {
level = 10;
}  else if (tapCount >= 100000000) {
level = 9;
} else if (tapCount >= 20000000) {
level = 8;
} else if (tapCount >= 1000000) {
level = 7;
} else if (tapCount >= 500000) {
level = 6;
} else if (tapCount >= 50000) {
level = 5;
} else if (tapCount >= 5000) {
level = 4;
} else if (tapCount >= 1000) {
level = 3;
} else if (tapCount >= 100) {
level = 2;
} else {
level = 1;
}

// Оновлюємо зображення та рівень
hamsterImage.src = images[level - 1];
levelDisplay.textContent = `Level: ${level}`;
});
let experience = 0; // Досвід
// Функція для обробки тапу
hamsterElement.addEventListener('click', () => {
if (!isModalOpen) { // Перевіряємо, чи модальне вікно відкрите
coins += 1; // Додаємо 1 монету за клік
experience += 1; // Збільшуємо досвід на 1

updateDisplay();
updateExperienceDisplay(); // Оновлюємо відображення досвіду
}
});

// Функція для оновлення відображення досвіду
function updateExperienceDisplay() {
experienceDisplay.innerText = `${experience}/${experienceToLevelUp[level - 1]}`; // Відображаємо досвід
updateExperienceProgress(); // Оновлюємо прогрес-бар

// Перевірка на підвищення рівня
if (experience >= experienceToLevelUp[level - 1]) {
level += 1; // Підвищуємо рівень
experience = 0; // Скидаємо досвід
if (level <= experienceToLevelUp.length) {
   alert(`Вітаємо! Ви підвищили рівень до ${level}!`);
} else {
   alert("Максимальний рівень досягнуто!");
}
}
levelDisplay.innerText = level; // Оновлюємо відображення рівня
}

// Функція для оновлення прогрес-бару
function updateExperienceProgress() {
const progressWidth = (experience / experienceToLevelUp[level - 1]) * 100; // Обчислюємо ширину прогрес-бару
experienceProgress.style.width = `${progressWidth}%`; // Оновлюємо стиль ширини
}