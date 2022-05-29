const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const authRouter = require('./authRouter');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cookieParser(), authRouter);
app.use(
  '/auth',
  cors({
    origin: true,
    credentials: true,
  }),
  authRouter
);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://zokof:zokof@cluster0.sfgbv.mongodb.net/babyapp?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
  try {
    app.get('/api/goals', (req, res) => {
      res.send('Get Goals');
    });
  } catch (error) {
    console.log(error);
  }
};

start();
