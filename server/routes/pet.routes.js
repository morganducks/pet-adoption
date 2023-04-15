const PetController = require('../controllers/pet.controller');  

module.exports = (app) => {
    app.post('/api/pets', PetController.createPet); 
    app.get('/api/pets', PetController.viewPets); 
    app.get('/api/pets/:id', PetController.viewOnePet); 
    // app.get('/api/pet/:id', PetController.viewNewPet); 
    app.delete('/api/pets/:id', PetController.deletePet); 
    app.put('/api/pets/:id', PetController.updatePet);
}