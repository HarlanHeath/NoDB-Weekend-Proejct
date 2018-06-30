const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const restCtrl = require("./controllers/restCtrl");
// What is the rest control and what is it doing

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/people", restCtrl.getPeople);
app.post("/api/people", restCtrl.favPeople);
app.delete("/api/people", restCtrl.sixtySixFavs);

app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
