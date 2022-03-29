const db = require('../db')
const Spirit = require('../models/spirit')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
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
          },
    ]

    await Spirit.insertMany(spirits)
    console.log("Created some wines!")
}
const run = async () => {
    await main()
    db.close()
}

run()