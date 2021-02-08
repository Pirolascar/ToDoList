const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    task: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);