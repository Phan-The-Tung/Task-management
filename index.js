const express = require("express");
const database = require("./config/database");
require("dotenv").config();
const apiRoutes = require("./api/v1/routes/index.route");

 


database.connect();

const app = express();
const port = process.env.PORT;

apiRoutes(app);

 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
