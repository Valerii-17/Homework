const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateTodos() {
    saveTodos();
    renderTodos();
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = input.value;

    const newTodo = {
        text: text,
        checked: false
    };

    todos.push(newTodo);
    updateTodos()
    form.reset()

});

function createTodo(text) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.classList.add('todo-item__description');
    span.textContent = text;

    const button = document.createElement('button');
    button.classList.add('todo-item__delete');
    button.textContent = 'Видалити';

    li.append(checkbox, span, button);

    return li;
}

todosWrapper.addEventListener('click', function (event) {

    if (event.target.classList.contains('todo-item__delete')) {
        const li = event.target.closest('.todo-item');
        const index = Number(li.dataset.index);

        todos.splice(index, 1);
        updateTodos();
    }

    if (event.target.type === 'checkbox') {
        const li = event.target.closest('.todo-item');
        const index = Number(li.dataset.index);

        todos[index].checked = event.target.checked;

        updateTodos();
    }
});

function renderTodos() {
    todosWrapper.innerHTML = '';

    todos.forEach(function (todo, index) {
        const li = createTodo(todo.text);

        li.dataset.index = String(index);

        if (todo.checked) {
            li.classList.add('todo-item--checked');
            li.querySelector('input').checked = true;
        }

        todosWrapper.appendChild(li);
    });
}

renderTodos();