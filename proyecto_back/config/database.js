const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const host = "localhost";
const port = "27017";
const db = "inFlight";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"));
}