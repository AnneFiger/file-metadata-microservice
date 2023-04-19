var express = require('express');
var app = express();
var cors = require('cors');
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const mongoose = require('mongoose');
require('dotenv').config()


const connection = mongoose
  .createConnection(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const storage = new GridFsStorage({
     db: connection 
    });

  const upload = multer({ storage });

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) { 
  res.json({ name: req.file.originalname, type: req.file.mimetype, size: req.file.size }); 
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
