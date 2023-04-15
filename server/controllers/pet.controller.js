const Pet = require('../models/pet.model');

const createPet = (req, res) => {
    Pet.create(req.body)
        .then((createPet) => {
            res.json(createPet);
            console.log("You created a pet!")
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
            console.log('Something went wrong during createPet');
        })
}

const viewPets = (req, res) => {
    Pet.find({})
        .then((viewPets) => {
            res.json(viewPets)
            console.log("You found the pets")
        })
        .catch((err) => {
            res.json(err)
            console.log("Something went wrong with view pets")
        });
}

const viewOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(viewOnePet => res.json(viewOnePet))
        .catch(err => res.json(err));
}

const updatePet = (req, res) => {
    console.log("editing...")
    Pet.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true })
        .then((updatePet) => {
            res.json(updatePet);
            console.log(updatePet);
            console.log("Successfully updated pet")
        })
        .catch((err) => {
            console.log('Something went wrong during updatePet');
            console.log(err);
            res.status(400).json(err);
        })
}

const deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
    .then((deletedPet) => {
        res.json(deletedPet)
        console.log("Successfully deleted pet")
    })
        .catch((err) => {
            res.json(err)
            console.log("Did not Delete pet")
        })
    }

module.exports = {
    viewPets,
    createPet,
    viewOnePet,
    updatePet,
    deletePet,
}