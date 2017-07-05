const Cities = require('../model/Cities.js');

exports.getAllCities = function(req, res) {
    let DBname = 'cities';
    Cities.getAllCities(DBname, function(err, docs) {
        if (err) {
            return res.sendStatus(500);
        }
        res.send(docs);
    });
};

