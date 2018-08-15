let mongoose = require('mongoose');
let Sport = mongoose.model('sports');
module.exports = {
    create: (req, res) => {
        console.log('hit create');
        console.log(req.body);
        let theSport = new Sport({name: req.body.name, description: req.body.description});
        theSport.save((err)=>{
            if(err){
                res.json(err);
            }else{
                res.json(theSport);
            }
        })

    },
    index: (req,res)=>{
        console.log('sports.index');
        Sport.find({}, function(err, sports){
            res.json(sports);
        })
    },
    show: (req,res)=>{
        console.log('sports.show');
        Sport.findOne({_id: req.params.id}, function(err, sport){
            res.json(sport);
        })
    }
}