const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const wireframeSchema = new Schema({
  websiteTitle: {
    type: String,
    required: 'You need to have a title!',
    minlength: 1,
    maxlength: 50,
    trim: true,
  },
  primaryColor: {
    type: String,
    required: 'You need to have a primary color!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  secondaryColor: {
    type: String,
    required: 'You need to have a secondary color!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  websitePurpose: {
    type: String,
    required: 'You need to have a website purpose!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  designStyle: {
    type: String,
    required: 'You need to have a design style!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  htmlCode: {
    type: String,
    required: 'You need to save a wireframe!',
    minlength: 1,
    maxlength: 5000,
    trim: true,
  },
  wireframeAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  }
});

const Wireframe = model('Wireframe', wireframeSchema);

module.exports = Wireframe;
