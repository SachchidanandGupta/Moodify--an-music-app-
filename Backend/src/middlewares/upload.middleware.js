const multer = require("multer");

const storage = multer.memoryStorage();

const uplaod = multer({storage:storage
    ,limits:{
        fileSize: 10 * 1024 * 1024  // 10MB
    }
})

module.exports = uplaod;