const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const restCtrl = require("./controllers/restCtrl");

const port = 3001;

//app = server to send/recieve requests
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Methods that express is listening for
app.get("/api/people", restCtrl.getPeople);
app.post("/api/people", restCtrl.favPeople);
app.delete("/api/people", restCtrl.sixtySixFavs);
//Still need an app.put - update method

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
