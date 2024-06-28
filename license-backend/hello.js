// Import required modules
const express = require('express');
const {getData} = require('./helper');

// Create an Express application
const app = express();
const port = 3000; // Port on which the server will run (you can change this as needed)

// Define a route handler for GET requests to /hello
app.get('/hello', (request, response) => {
  response.send('Hello!');
});


app.get('/country/list',(req,res)=>{
    res.send('{"countries":["UnitedStates","Europe","India","Srilanka","Australia","Africa","Russia","Japan"]}');

});

app.get('/user', async (req,res) =>{
  console.log("getting user data from mongo db");
  const data = await getData();
  res.send("Hello"+ JSON.stringify(data));
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running and listening at http://localhost:${port}`);
});

