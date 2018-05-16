const multer = require('multer');
const path = require('path');

//*** FILE UPLOAD LOGIC ****/
// creates storage location and file name for a users avatar
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, __dirname + '../../../images/uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// limits the file size to 1MB
// fileFilter checks the extension type
module.exports = multer({
  storage: storage,
  fileFilter: function(req, file) {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return console.log('Only images are allowed');
    }
  },
  limits: { fileSize: 1000000 }
});