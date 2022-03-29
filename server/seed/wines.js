const db = require("../db");
const Wine = require("../models/wine");


db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
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
    },
    {
      producer: "Marchesi Antinori",
      name: `Tenuta Tignanello 'Solaia'`,
      vintage: "2009",
      region: "Tuscany IGT",
      subregion: `'Super Tuscan'`,
      tasted: true,
      glass: "Mason Jar",
      pair: "conversation, mountain",
      friends: "Mariel",
      description: "",
      notes: "",
      image: "",
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
