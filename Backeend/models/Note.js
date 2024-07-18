const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Note', NotesSchema);
