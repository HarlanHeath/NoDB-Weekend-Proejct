const axios = require("axios");

let swChars = [];
let favChars = [];

axios.get("https://swapi.co/api/people/").then(response => {
  swChars = response.data;
});

const getPeople = (req, res) => {
  res.status(200).json(swChars);
};

const favPeople = (req, res) => {
  console.log(req.body);
  favChars.push(req.body);
  res.status(200).json(favChars);
};

const sixtySixFavs = (req, res) => {
  const indx = favChars.findIndex();
  favChars.splice(index, 1);
};

module.exports = {
  getPeople,
  favPeople,
  sixtySixFavs
};
