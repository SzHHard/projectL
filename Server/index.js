require('dotenv').config();
const express = require("express");
const playerCardsRouter = require("./Cards/player-cards-router.js");
const authRouter = require("./Auth/authRouter");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error-middleware');


const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();


const corsOptions = {
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
 
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));


app.use("/api/cards", playerCardsRouter);
app.use("/api/auth", authRouter);

app.use(errorMiddleware); // всегда должен идти последним


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!!!" });
  });
  app.get("/", (req, res) => {
    res.json({ message: "Hello from server!!!" });
  });



const start = async () => {

  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  }
  catch(err) {
    console.log('myerr: ' + err)
  }
}

start();
