const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

//get saved
router.route("/api/saved")
    .get(articlesController.findAll);

//save articles
router.route("/api/saved")
    .get(articlesController.create);

//delete saved 
router.route("api/saved/:id")
    .get(articlesController.delete);

module.exports = router;