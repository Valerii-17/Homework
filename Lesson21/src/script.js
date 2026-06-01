import './scss/main.scss';
import $ from 'jquery';

class TodoList {

    constructor() {
        this.form = $('.js--form');
        this.input = $('.js--form__input');
        this.todosWrapper = $('.js--todos-wrapper');
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.renderTodos();
        this.addTodo();
        this.toggleTodo();
        this.deleteTodo();
        this.showModal();
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    renderTodos() {
        this.todosWrapper.html('');
        this.todos.forEach((todo, index) => {

            const template = `<li class="todo-item ${todo.checked ? 'todo-item--checked' : ''}"data-index="${index}" >
                    <input type="checkbox" ${todo.checked ? 'checked' : ''}>
                    <span class="todo-item__description">${todo.text}</span>
                    <button class="todo-item__delete">Видалити</button></li> `;
            this.todosWrapper.append(template);
        });
    }

    addTodo() {

        this.form.on('submit', (event) => {
            event.preventDefault();
            const newTodo = {text: this.input.val(), checked: false};
            this.todos.push(newTodo);
            this.saveTodos();
            this.renderTodos();
            this.form.trigger('reset');
        });

    }

    toggleTodo() {

        this.todosWrapper.on('change', 'input', (event) => {
            const index = $(event.target).closest('.todo-item').data('index');
            this.todos[index].checked = event.target.checked;
            this.saveTodos();
            this.renderTodos();

        });

    }

    deleteTodo() {

        this.todosWrapper.on('click', '.todo-item__delete', (event) => {
            const index = $(event.target).closest('.todo-item').data('index');
            this.todos.splice(index, 1);
            this.saveTodos();
            this.renderTodos();

        });

    }

    showModal() {

        this.todosWrapper.on(
            'click',
            '.todo-item__description',
            (event) => {
                const text = $(event.target).text();
                $('.modal-text').text(text);
                $('#todoModal').modal('show');

            });

    }
}

const todo = new TodoList();
