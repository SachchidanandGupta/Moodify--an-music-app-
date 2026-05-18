const multer = require("multer");

const storage = multer.memoryStorage();

const uplaod = multer({storage:storage
    ,limits:{
        fileSize: 5 * 1024 * 1024  // 5MB
    }
})

module.exports = uplaod;