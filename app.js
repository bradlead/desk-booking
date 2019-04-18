const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const Desk = require('./controllers/Desk');
const DeskController = require('./controllers/Desk');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

const app = express();
mongoose.connect(process.env.DATABASE_CONN);
app.use(bodyParser.json())
app.get('/', (req, res, next) => res.send('Hello MongoDb!'));
app.use('/graphql', graphqlHttp({
    schema: buildSchema('
        type RootQuery{

        }
        type RootMutation {

        }
        schema {
         query: RootQuery
          mutation: RootMutation
        }
      ),
    rootValue: {}
}));



app.post('/Desk', Desk.post);
app.get('/Desk', DeskController.list);
app.get('/Desk/:deskId', DeskController.get);
app.get('/Desk/:deskId', DeskController.put);
app.get('/Desk/:deskId', DeskController.put);


app.listen(3000, () => console.log('It works!'));
