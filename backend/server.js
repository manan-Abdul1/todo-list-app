const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const path = require('path');


const app = express();
app.use(express.json());
app.use(cors());

const dbconfig = require('./db');
const taskRoutes = require('./routes/taskRoutes');
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.use('/', taskRoutes);
app.listen(port, ()=> console.log("server started",port))