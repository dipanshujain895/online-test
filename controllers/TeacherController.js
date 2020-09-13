const databaseUtil = require('../utils/DatabaseUtil');
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

exports.postLogin = (req, res, next) => {
    const body = req.body;
    // MongoClient.connect(url)
    // .then((client) => {
    //     let db = client.db()
    console.log(body);
    databaseUtil.getClient().db().collection('teachers').findOne({email: body.email, password: body.password})
    .then((document) => {
        console.log(document);
        res.redirect('/student/dashboard');
        // return res.json(document);
    })
    .catch((err) => {
        console.log(err);
        return res.json(err);
    })
};


// exports.viewDetails = (req, res, next) => {

// }