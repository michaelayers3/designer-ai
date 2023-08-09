const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const wireframeSchema = new Schema({
  websiteTitle: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  primaryColor: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  secondaryColor: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  websitePurpose: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  designStyle: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  apiResponseText: {
    type: String,
    // required: true,
    minlength: 1,
    // maxlength: 280,
    trim: true,
  },
  // userText: {
  //   type: String,
  //   // required: true,
  //   minlength: 1,
  //   // maxlength: 280,
  //   trim: true,
  // },
  wireframeAuthor: {
    type: String,
    // required: true,
    minlength: 1,
    // maxlength: 280,
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
