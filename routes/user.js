const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

// Definir rutas
router.post("/register", UserController.register);

// Exportar router
module.exports = router;