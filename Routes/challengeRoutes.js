var express = require('express');

var routes = function(Challenge){
    var challengeRouter = express.Router();

    var challengeController = require('../Controllers/challengeController')(Challenge)
    challengeRouter.route('/')
        .post(challengeController.post)
        
        .get(challengeController.get);

    challengeRouter.use('/:challengeId', function(req,res,next){
        Challenge.findById(req.params.challengeId, function(err,challenge){
            if(err)
                res.status(500).send(err);
            else if(challenge){
                req.challenge = challenge;
                next();
            }
            else{
                res.status(404).send('no quote found');
            }
        });
    });
    
    challengeRouter.route('/:challengeId')
        .get(function(req,res){
            res.json(req.challenge);
        })
        .put(function(req,res){  //replaces entire item
            req.challenge.words = req.body.words;
            req.challenge.person = req.body.person;
            req.challenge.year = req.body.year; //req.challenge is getting modified by whatever is in req.body
            req.challenge.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.challenge);
                }
            });
        })
        
        
        .delete(function(req,res){
            req.challenge.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204);
                }
            });
        });
        
    return challengeRouter;
};

module.exports = routes;