let mongoose = require('mongoose');
let sportSchema = new mongoose.Schema({
    name: String,
    description: String
})

mongoose.model('sports', sportSchema);