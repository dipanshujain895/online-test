const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;



let _client;

exports.initDb = (callback) => {
    
    if(_client) {
        console.log("Database is already initialized");
        return callback(null, _client);
    }
    MongoClient.connect(url)
    .then((client) => {
        _client = client;
        console.log("Database Initialized");
        console.log(typeof(_client));
        callback(null, _client);
    })
    .catch((err) => {
        console.log(err);
    })

    // const collections = await db.listCollections().toArray()
    // console.log(collections);

};

exports.getClient = () => {
    if(!_client) {
        throw Error("Database not initialized");;
    }
    
    return _client;
}