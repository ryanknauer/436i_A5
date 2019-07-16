const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Messages = new Schema({
  name: {
    type: String
  },
  text: {
    type: String
  }
},{
    collection: 'Messages'
});

module.exports = mongoose.model('Messages', Messages);