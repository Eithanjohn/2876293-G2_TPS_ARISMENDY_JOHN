const express = require ("express");
const router = express.Router();
const clientesController = require ("../controllers/clientescontroller");router.get ("/",clientesController.list);
module.exports = router;