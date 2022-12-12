// 1) Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// 2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// 3) Оновлюй інтерфейс новим значенням змінної counterValue.

const button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
    counterValue += 1;

    button.span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    button.span.textContent = counterValue;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);
