const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        minlength: [3, "Author name must be at least 3 characters long"],
        required: [true, "Must enter name"],
    },
    petType: {
    type: String,
    required: [true, "Must choose a type"],
    enum:[
        "Dog",
        "Cat",
     ]
    },
    petGender: String,
    petAge: Number,
    petImage: String,
    petDesc: {
        type: String,
        minlength: [3, "Description must be at least 3 characters long"],
        required: [true, "Must be longer than 3 characters"]
    },
    petSkillOne: String,
    petSkillTwo: String,
    petSkillThree: String,
    petLike: Number,

}, { timestamps: true });

module.exports = mongoose.model('Pet', PetSchema);

