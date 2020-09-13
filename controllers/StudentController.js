const databaseUtil = require('../utils/DatabaseUtil');
// const client = databaseUtil.getDb();
// console.log(typeof(db));

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

exports.postLogin = (req, res, next) => {
    const body = req.body;
    // MongoClient.connect(url)
    // .then((client) => {
    //     let db = client.db()
    console.log(body);
    // const db = databaseUtil.getDb();

        databaseUtil.getClient().db().collection('students').findOne({email: body.email, password: body.password})
        .then((document) => {
            console.log(document);
            if(document ===  null){
                // res.redirect('')
            }
            return res.render('loggedIn', {
                pageTitle: "Login Test",
                email: body.email
            });
            // res.redirect('/student/dashboard', );
            // return res.json(document);
        })
        .catch((err) => {
            console.log(err);
            return res.json(err);
        })

    // })
};

exports.getTest = (req, res, next) => {
    databaseUtil.getClient().db().collection('tests').findOne({test_id: "test1"})
    .then((document) => {
        console.log(document);
        return res.render("test", {
            pageTitle: "Test Page",
            
            ...document});
    })
};

exports.postTest = (req, res, next) => {
    
};

exports.submitTest = (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
    
};

 
// exports.viewDetails = (req, res, next) => {

// }