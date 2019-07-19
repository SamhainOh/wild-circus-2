const models = require('../models');
const Cart= models.Cart;
const faker = require('faker');

Cart.create({
    statut: faker.lorem.sentence(),
    user_id: 1
})

.then((cart) => { console.log(cart); })
.catch((error) => { console.log(error); })