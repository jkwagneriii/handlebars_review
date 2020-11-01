const db = require('../models');

const router = require('express').Router();

router.route('/')
    .get(function(req, res) {
        db.Burger.findAll({}).then(function(burgerData){
        res.render('index', { burgers: burgerData });
    })
}); 




//HTML ROUTES /burgers
    //ping the db for all the burger data
    //res.render(data "burger") -->generate all the html for the client


//html to user
//static files     
    //js
        //manages our button clicks
            //user clicks on "devour it"
            //ajax update('/api/burger/4') ->req
            //move that element with the id
    //css  