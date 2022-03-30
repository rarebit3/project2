const Cellar = require('../models/cellar');
const Wine = require('../models/wine');
const Spirit = require('../models/spirit');
const User = require('../models/user');
// const UserInfo = require('../models/userinfo');

const getAllWines = async (req, res) => {
    try {
        const wines = await Wine.find()
        return res.status(200).json({ wines })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllSpirits = async (req, res) => {
    try {
        const spirits = await Spirit.find()
        return res.status(200).json({ spirits })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getWineById = async (req, res) => {
    try {
        const { id } = req.params;
        const wine = await Wine.findById(id)
        if (wine) {
            return res.status(200).json({ wine });
        }
        return res.status(404).send('dino with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getSpiritById = async (req, res) => {
    try {
        const { id } = req.params;
        const spirit = await Spirit.findById(id)
        if (spirit) {
            return res.status(200).json({ spirit });
        }
        return res.status(404).send('dino with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createWine = async (req, res) => {
    try {
        const wine = await new Wine(req.body)
        await wine.save()
        return res.status(201).json({
            wine,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createSpirit = async (req, res) => {
    try {
        const spirit = await new Spirit(req.body)
        await spirit.save()
        return res.status(201).json({
            spirit,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// const createUserInfo = async (req, res) => {
//     try {
//         const userInfo = await new UserInfo(req.body)
//         await userInfo.save()
//         return res.status(201).json({
//             userInfo,
//         });
//     } catch (error) {
//         return res.status(500).json({ error: error.message })
//     }
// }

const createCellar = async (req, res) => {
    try {
        const cellar = await new Cellar(req.body)
        await cellar.save()
        return res.status(201).json({
            cellar,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createCellar,
    createSpirit,
    createUser,
    createWine,
    getAllSpirits,
    getAllWines,
    getSpiritById,
    getWineById,
    // createUserInfo
}