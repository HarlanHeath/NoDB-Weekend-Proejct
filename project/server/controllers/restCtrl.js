const axios = require("axios");

let swChars = [];
let favChars = [];

axios.get("https://swapi.co/api/people/").then(response => {
  swChars = response.data.results;
});

const getPeople = (req, res) => {
  res.status(200).json(swChars);
};

const favPeople = (req, res) => {
  favChars.push(req.body.person);
  res.status(200).json(favChars);
};

const removeFavs = (req, res) => {
  let { name } = req.params;
  let index = favChars.findIndex(fav => fav.name === name);
  favChars.splice(index, 1);
  res.status(200).json(favChars);
};

const addPerson = (req, res, next) => {
  let { input } = req.body;
  swChars.push({ name: input });
  res.status(200).json(swChars);
};

const editChars = (reg, res) => {};

module.exports = {
  getPeople,
  favPeople,
  removeFavs,
  addPerson,
  editChars
};
