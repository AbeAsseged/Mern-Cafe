//W13D4 part 3

const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
db.on('disconnected', function () {
  console.log(`Disconnected`);
});

module.exports = db;




















// W13D3 part 3
// const mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connection;

// db.on('connected', function () {
//   console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
// });

