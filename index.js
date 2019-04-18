const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  app.listen(3000);
});