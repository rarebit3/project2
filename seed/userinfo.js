const db = require("../db");
const Userinfo = require("../models/userinfo");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const userinfos = [
    {
      userName: "Tbond",
      firstName: 'Trevor',
      lastName:'Bond',
      email: 'fakeemail@fake.com'
    },
  ];

  await Userinfo.insertMany(userinfos);
  console.log("Created a user!");
};
const run = async () => {
  await main();
  db.close();
};

run();
