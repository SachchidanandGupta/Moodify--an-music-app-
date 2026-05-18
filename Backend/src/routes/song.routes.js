const {Router} = require("express");
const upload = require("../middlewares/upload.middleware");
const songController = require("../controllers/song.controller");

const router = Router();
router.post("/upload",upload.single("song"),songController.uploadController);
module.exports = router