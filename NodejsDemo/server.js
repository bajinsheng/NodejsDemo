// Author:Jinsheng Ba

// Call the packages
var express = require('express')
, app = express()
, bodyParser = require('body-parser')
, morgan = require('morgan')
, mongoose = require('mongoose')
, database = require('./config/database')
, User = require('./models/user')
, port = process.env.PORT || 8000
, router = express.Router();

// Mongodb connect
mongoose.connect(database.url);

// Use bodyparser parse the data from post
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


router.use(function (req, res, next) {
    console.log('==>', req.method, req.url);
    next();
});



// route
router.route('/users')
//insert a new data
	.post(function (req, res) {
    var user = User();
    user.username = req.body.username;
    user.isSuperAdmin = req.body.isSuperAdmin;
    user.name = req.body.name;
    user.createdAt = req.body.createdAt;
    user.isActive = req.body.isActive;
    user.save(function (err) {
        if (err)
            res.send(err);
        
        res.json({ message: 'insert success!' });
    });
})
//return all data
	.get(function (req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        
        res.json(users);
    });
})

router.route('/users/:user_id')
//query the specify data by id
	.get(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        
        res.json(user);
    })
})
//update the specify data by id
	.put(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        
        user.username = req.body.username;
        user.isSuperAdmin = req.body.username;
        user.name = req.body.name;
        user.createdAt = req.body.createdAt;
        user.isActive = req.body.isActive;
        
        user.save(function (err) {
            if (err)
                res.send(err);
            
            res.json({ message: 'update success' });
        });
    });
})
//delete the specify data by id
	.delete(function (req, res) {
    User.remove({ _id: req.params.user_id }, function (err, User) {
        if (err)
            res.send(err);
        
        res.json({ message: 'delete success' });
    })
})

router.get('/', function (req, res) {
    res.json({ message: 'Welcome to the userInfo-api!' })
});


//access path
app.use('/api/v1', router);

// Start server
app.listen(port);
console.log(port);
