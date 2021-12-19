require('dotenv').config();
const express = require("express");
const playerCardsRouter = require("./Cards/player-cards-router.js");
const authRouter = require("./Auth/authRouter");
const avatarsRouter = require('./Upload/Routes')
const cookieParser = require('cookie-parser');
const cors = require('cors');
//const mongoose = require('mongoose');
const errorMiddleware = require('./middlewares/error-middleware');
const mongoStart = require('./mongoStart')
const path = require('path')

mongoStart();


const PORT = process.env.PORT || 3001;
const app = express();


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true

}

//console.log(path.join(__dirname, 'userAvatars'));

app.use(express.json());
//app.use('/userAvatars', express.static(path.join(__dirname, 'userAvatars')))
//app.use(express.static('userAvatars'))
app.use(cookieParser());
app.use(cors(corsOptions));


app.use("/api/cards", playerCardsRouter);
app.use("/api/auth", authRouter);
app.use("/api/files", avatarsRouter);
app.use(errorMiddleware); // всегда должен идти последним


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!!!" });
});




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


