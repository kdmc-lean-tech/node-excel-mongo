const { model, Schema } = require('mongoose');

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  company: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('Employee', EmployeeSchema);
