const models = require('../models');
const CartHasProduct= models.CartHasProduct;
const faker = require('faker');

CartHasProduct.create({
    statut: faker.lorem.sentence(),
    user_id:1,
    product_id: 1
})

.then((carthasproduct) => { console.log(carthasproduct); })
.catch((error) => { console.log(error); })