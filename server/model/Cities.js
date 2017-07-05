const db = require('../db.js');

exports.getAllCities = function(DBname, callback) {
    db.get()
        .collection(DBname)
        .find()
        .toArray (
            function (err, docs) {
                callback(err, docs);
            }
        );
};
