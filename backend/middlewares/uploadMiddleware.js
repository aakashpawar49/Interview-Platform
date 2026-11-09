const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Absolute path so uploads work no matter where the server is started from
const UPLOAD_DIR = path.join(__dirname, '..', 'uploads');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // multer does not create the folder when destination is a function
        fs.mkdir(UPLOAD_DIR, { recursive: true }, (err) => cb(err, UPLOAD_DIR));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg, .jpg and .png formats are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
