const db = require("../db");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      userName: "Tbond",
      password: "1234",
    },
  ];

  await User.insertMany(users);
  console.log("Created a user!");
};
const run = async () => {
  await main();
  db.close();
};

run();
