// Communicates with db   

const db = require('./models');

module.exports = {
//FUNCTIONALITY of this controller 
    //GET all the burgers
    smashAllBurgs: function(req, res) {
        db.Burger.findAll({}).then(function(dbBurgerData) {res.json(dbBurgerData)})
    }
    //GET burger by id 
    //ADD burger  
    //DELETE burger
    //UPDATE burger  
}

