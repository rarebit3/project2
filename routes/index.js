const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.post("/newcellar", controllers.createCellar);

router.post("/newspirit", controllers.createSpirit);

router.post("/newuser", controllers.createUser);

router.post("/newwine", controllers.createWine);

router.get("/spirits", controllers.getAllSpirits);

router.get("/wines", controllers.getAllWines);

router.get("/spirit/:id", controllers.getSpiritById);

router.get("/wine/:id", controllers.getWineById);

router.post("/updatewine", controllers.updateWine)

router.delete("/removewine/:id", controllers.removeWine)

module.exports = router;
