const categoryController=require("../controller/category.controller")
const { verifyToken } = require("../middleware/auth")
const router=require("express").Router()

router.route("/")
.post(verifyToken,categoryController.store)

module.exports=router