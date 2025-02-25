const categoryController = require("../controller/category.controller");
const { verifyToken, isAdmin, isUser } = require("../middleware/auth");
const router = require("express").Router();

router
  .route("/")
  .post(verifyToken, categoryController.store)
  .get(verifyToken, categoryController.index);

router
.route("/:id").delete(verifyToken, categoryController.trash);

module.exports = router;