var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var challengeModel = new Schema({
    title: {
        type: String
    },
    quote: {type: String},
    person: {type: String},
    year: {type: Number}
});

module.exports= mongoose.model('Challenge', challengeModel);