const db = require("../db");
const Cellar = require("../models/cellar");


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
    const cellars = [
{
    userName: 'Tbond',
    cellarName: 'My First Cellar',
}
];

await Cellar.insertMany(cellars);
console.log("Created a cellar!");
};
const run = async () => {
await main();
db.close();
};

run();