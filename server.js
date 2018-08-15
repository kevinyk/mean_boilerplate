let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
// Make sure to change which db we are connecting to!
mongoose.connect('mongodb://localhost/boilerplate_db');

require('./server/config/mongoose');
let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(8000, function () {
    console.log('on port 8000');
})