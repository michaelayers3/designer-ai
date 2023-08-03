const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const wireframeSchema = new Schema({
  wireframeText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },

  
  
});

const Wireframe = model('Wireframe', wireframeSchema);

module.exports = Wireframe;
