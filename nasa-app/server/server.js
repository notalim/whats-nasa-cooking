const express = require("express");
const cors = require("cors");
const configRoutes = require("../src/routes");

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors()); 
app.use(express.json());

configRoutes(app);

app.listen(PORT, () => {
    console.log("We've now got a server!");
    console.log("Server is running on port ${PORT}");
});
