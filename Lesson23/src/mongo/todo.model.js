const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  text: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});

module.exports = model('Todos', TodoSchema);
