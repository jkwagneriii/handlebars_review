//Dependencies
const router = require('express').Router();
const burgersController = require('../controllers/burgersController');

//CRUD 
router.route('/api/burgers/:id?')
    .get(req.params.id ? burgersController.smashSpecificBurg : burgersController.smashAllBurgs) 
    .post(burgersController.addBurg)
        //add a burger to database
    .update(burgersController.updateBurg)
        //update a specific burger
    .delete(burgersController.deleteBurg); 
        //delete a specific burger 

module.exports = router;