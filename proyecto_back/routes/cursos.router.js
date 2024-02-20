const express = require("express")
const router = express.Router()
const cursosController = require("../controllers/cursos.controller")

router.post("/", cursosController.create)
router.get("/", cursosController.find)
router.get("/:id", cursosController.findOne)
router.put("/:id", cursosController.update)
router.delete("/:id", cursosController.remove)

module.exports = router;