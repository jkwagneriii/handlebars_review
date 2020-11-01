// Dependencies 
const express = require('express');

//Create an instance of express 
const app = express();

//heroku or local host 
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});
  