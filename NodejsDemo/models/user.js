// user model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: { type: String, required: true }
    , isSuperAdmin: { type: Boolean, default: false }
    , name: { type: String, required: true }
    , createdAt: { type: Date, default: Date.now }
    , isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', User);