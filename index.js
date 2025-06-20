const express = require("express");
const database = require("./config/database");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./api/v1/routes/index.route");

 


database.connect();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.json());

apiRoutes(app);

 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
