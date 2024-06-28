// file for connection to mongoose db

const mongoose = require('mongoose');
// uri format -> mongodb protocol :// username : password encoded @ hostname/databasename?query parameters with arguments.
const uri = 'mongodb+srv://rekha:Admin%402108@rekhadevdb.dp9wgcp.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=RekhaDevDB';
async function connectToDatabase(){
    try{
await mongoose.connect(uri, { });

const db = mongoose.connection;
    
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB with mongoose');
});
    }
    catch(error){
        console.log("error fetching user data",error);
    }
}

connectToDatabase();
module.exports = mongoose;
