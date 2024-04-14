const express = require("express");
const multer = require("multer");
const app = express();
app.listen(8001, () => {
  console.log("service running at PORT: 8001");
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".png");
  },
});
const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.send("Hello Upload");
});
app.post("/upload", upload.single("file"), (req, res) => {
  res.send(req.file);
});
