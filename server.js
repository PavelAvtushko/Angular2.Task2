const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./server/controllers/dataBaseController');
const db = require('./server/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./dist'));

//returns a new collection from the database 
app.get('/chartData', controller.getAllCities);

db.connect('mongodb://pavel:chart@ds032887.mlab.com:32887/cities',
    function(err){
        if(err) {
            return console.log(err);
        }
    app.listen(3000, function(){
        console.log('connection is ready...');
    });
});
