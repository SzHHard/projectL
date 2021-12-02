const express = require("express");
const playerCardsRouter = require("./CardsRouters/playerCardsRouter.js");

const PORT = process.env.PORT || 3001;

const app = express();


const dbInteraction = require('./database/db')
// dbInteraction.createUsersTable();
// dbInteraction.createPlayerСardsTable();
// dbInteraction.insertPlayerCard(1, 'My name is Saveliy and I would like to play with you!', 'much text here', 'iron4', 'cat1');
//  dbInteraction.fetchPlayerCards();




app.use("/api/players", playerCardsRouter);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});