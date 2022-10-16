const Task= require("../controller/task.controller.js")
const router = require("express").Router()

router.get("/add",Task.add)
router.post("/add",Task.addLogic)
router.get("/",Task.showAll)
// router.get("/single/:id",Task.single)
router.get("/del/:id",Task.del)

module.exports=router