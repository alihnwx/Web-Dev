// 1. Находим основные элементы
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// 2. Функция создания задачи
function createTodo() {
    const text = input.value.trim(); // .trim() убирает лишние пробелы

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    // Создаем элемент списка (li)
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Наполняем его внутренним HTML
    li.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <input type="checkbox" class="complete-checkbox">
            <span>${text}</span>
        </div>
        <button class="delete-btn">Delete</button>
    `;

    // Логика чекбокса (Mark as Done)
    const checkbox = li.querySelector('.complete-checkbox');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    // Логика кнопки удаления
    const delBtn = li.querySelector('.delete-btn');
    delBtn.addEventListener('click', () => {
        todoList.removeChild(li); // Удаление из DOM
    });

    // Добавляем готовый li в наш список ul
    todoList.appendChild(li);

    // Очищаем поле ввода и возвращаем на него фокус
    input.value = "";
    input.focus();
}

// 3. Вешаем событие на кнопку "Add"
addBtn.addEventListener('click', createTodo);

// Бонус: добавление по нажатию клавиши Enter
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTodo();
    }
});