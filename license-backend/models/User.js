// file for database model - define schema for fetch
const mongoose = require('../db');

//create schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

//create model
// while creating model , map which table points to this schema.
const UserModel = mongoose.model('users', userSchema); 
module.exports = UserModel;
