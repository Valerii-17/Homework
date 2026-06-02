const { Schema, model } = require('mongoose');

const todoSchema = Schema({
    text: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
    }
});

module.exports = model('Todos', todoSchema);