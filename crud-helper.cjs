// Connect to the database
//W14D4 part 2 w14d3 notes 
// Connect to the database
require('dotenv').config();
const db = require('./config/database.cjs');

// Require the Mongoose models
// const User = require('./models/user.cjs');
// const Item = require('./models/item');
// const Category = require('./models/category');
const Order = require('./models/order.cjs');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

Order.create({
  user: "650a147f64ee1efebbfb607c",
  isPaid: true,
  lineItems: [
    {
      qty: 1,
      item: {
        name: 'Hamburger',
        emoji: '🍔',
        price: 5.95,
      }
    },
    {
      qty: 2,
      item: {
        name: 'Turkey Sandwich',
        emoji: '🥪',
        price: 6.95,
      }
    }
  ]
}).then((order) => {
  console.log(order)
}).finally(() => {
  db.close()
})




















// Connect to the database
//W13D4 part 3 
// Connect to the database
// require('dotenv').config();
// const db = require('./config/database.cjs');

// // Require the Mongoose models
// // const User = require('./models/user.cjs');
// // const Item = require('./models/item');
// // const Category = require('./models/category');
// // const Order = require('./models/order');

// // Local variables will come in handy for holding retrieved documents
// let user, item, category, order;
// let users, items, categories, orders;

// setTimeout(() => {
//   db.close();
// }, 5000);