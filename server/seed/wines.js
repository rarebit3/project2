const db = require("../db");
const Wine = require("../models/wine");
const Cellar = require("../models/cellar")

db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
  const myFirstCellar = await Cellar.find({ name: 'My First Cellar'})

  const wines = [
    {
      producer: "Perrier Jouet",
      name: `'Belle Epoque'`,
      vintage: "2008",
      region: "Champagne",
      subregion: "Epernay",
      tasted: true,
      glass: "flute",
      pair: "crunchy, salty, conversation",
      friends: "Gretta",
      description: "",
      notes: "",
      image: "",
      bottles: 6,
      cellar: myFirstCellar[0]._id
    },
    {
      producer: "Marchesi Antinori",
      name: `Tenuta Tignanello 'Solaia'`,
      vintage: "2009",
      region: "Tuscany IGT",
      subregion: `'Super Tuscan'`,
      tasted: true,
      glass: "Mason Jar",
      pair: "conversation, mountains",
      friends: "Mariel",
      description: "",
      notes: "",
      image: "",
      bottles: 1,
      cellar: myFirstCellar[0]._id
    },
  ];

  await Wine.insertMany(wines);
  console.log("Created some wines!");
};
const run = async () => {
  await main();
  db.close();
};

run();
