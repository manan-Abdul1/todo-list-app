const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const dbconfig = require('./db');
const taskRoutes = require('./routes/taskRoutes');
const port = process.env.PORT || 5000;


app.use('/', taskRoutes);
app.listen(port, ()=> console.log("server started",port))