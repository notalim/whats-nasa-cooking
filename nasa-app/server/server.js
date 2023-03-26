const express = require("express");
const cors = require("cors");
const configRoutes = require("../src/routes");

const app = express();

app.use(cors()); 
app.use(express.json());

configRoutes(app);

app.listen(5001, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:5001");
});
