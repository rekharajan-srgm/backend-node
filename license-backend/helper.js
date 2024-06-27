const userModel = require('./models/User');
const mongoose = require('./db');

async function getData() {
    try {
        const data = await userModel.find({});
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
}

module.exports = { getData };