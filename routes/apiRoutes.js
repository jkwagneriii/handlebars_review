//Dependencies
const router = require('express').Router();

//CRUD 
router.route('/api/burgers/:id?')
    .get(function(req, res) {
        if(req.params.id){
            //get burger by id
        }
        //get all the available burgers
    })
    .post(function(req, res) {
        //add a burger to database
    })
    .update(function(req, res) {
        //update a specific burger
    })
    .delete(function(req, res) {
        //delete a specific burger 
    });

module.exports = router;