const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    content: String,
    doneAt : Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);