const userModel = require('./models/User');
const mongoose = require('./db');

async function getData() {
    try {
        const data = await userModel.find({});
        return data;
    } catch (error) {
        console.error(error);
    } finally {
        // mongoose.connection.close();
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ CLOSED CONNECTION");
    }
}

module.exports = { getData };