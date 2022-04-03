const db = require("../db");
const Spirit = require("../models/spirit");
const Cellar = require("../models/cellar")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const myFirstCellar = await Cellar.find({ name: 'My First Cellar'})

  const spirits = [
    {
      producer: "King Carr Distillery",
      name: `'Kavalan'`,
      subname: "Sherry Oak",
      location: "Taiwan",
      agestate: "",
      tasted: true,
      glass: "snifter",
      pair: "conversation",
      friends: "Nathaniel, Esther, Skylar, Colin",
      description: "",
      notes: "",
      image: "",
      cellar: myFirstCellar[0]._id
    },
    {
      producer: "King Carr Distillery",
      name: `King Carr`,
      subname: "",
      location: "Taiwan",
      agestate: "",
      tasted: true,
      glass: "snifter",
      pair: "conversation",
      friends: "Nathaniel, Esther",
      description: "",
      notes: "",
      image: "",
      cellar: myFirstCellar[0]._id
    },
  ];

  await Spirit.insertMany(spirits);
  console.log("Created some spirits!");
};
const run = async () => {
  await main();
  db.close();
};

run();
