var challengeController = function(Challenge){

    var post = function(req, res){
        var challenge = new Challenge(req.body);

        if(!req.body.quote){
            res.status(400);
            res.send('You need a quote');
        }
        else {
            challenge.save();
            res.status(201);
            res.send(challenge);
        }
    }

    var get = function(req,res){

        var query = {};

        if(req.query.person)
        {
            query.person = req.query.person;
        }
        Challenge.find(query, function(err,challenges){
            if(err)
                res.status(500).send(err);
            else
                res.json(challenges);
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = challengeController;