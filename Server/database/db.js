const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db.sqlite');

const createUsersTable = () => {
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, nickName TEXT NOT NULL, profileImg TEXT, status TEXT NOT NULL)');
}

const createPlayerСardsTable = () => {
    db.run('CREATE TABLE playerСards (id INTEGER PRIMARY KEY, userId, briefInfo TEXT, fullInfo TEXT, rank TEXT, category1 TEXT, FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE)');
}


const insertPlayerCard = (user_id, briefInfo, fullInfo, rank, category1) => {
    db.run(`INSERT INTO playerСards (userId, briefInfo, fullInfo, rank, category1) VALUES($val1, $val2, $val3, $val4, $val5)`, 
    {
        $val1: user_id,
        $val2: briefInfo,
        $val3: fullInfo,
        $val4: rank,
        $val5: category1,
    },
    function (error) {
        if(error) {
            console.log(error);
            return;
          }
        console.log(this.lastID); //выводит последнее id 
      }
    )
}

const fetchPlayerCards = () => {
    db.all('SELECT * FROM playerСards', (err, players) => {
        console.log(players);
    })
}


const dbInteraction = {
    createUsersTable,
    createPlayerСardsTable,
    insertPlayerCard,
    fetchPlayerCards,
}

module.exports = dbInteraction;

// createUsersTable();
// createPlayerСardsTable();
// insertPlayerCard(1, 'My name is Saveliy and I would like to play with you!', 'much text here', 'iron4', 'cat1');
// fetchPlayerCards();
