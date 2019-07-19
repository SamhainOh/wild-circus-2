const models = require('../models');
const Product = models.Product;
const faker = require('faker');

Product.create({
    name: faker.commerce.productName(),
    picture:faker.image.fashion(),
    description:faker.lorem.sentence(),
    category:faker.commerce.department(),
    price: faker.commerce.price()
})

.then((product) => { console.log(product); })
.catch((error) => { console.log(error); })