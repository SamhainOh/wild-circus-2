const models = require('../models');
const User = models.User;
const faker = require('faker');

User.create({
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: "test1234",
    street: faker.address.streetName(),
    zip: 12345,
    city: faker.address.city(),
    country: faker.address.country()
})
.then((user) => { console.log(user); })
.catch((error) => { console.log(error); })

User.findByPk()
.then((user) => {console.log(user);})
.catch((error) => {console.log(error);})


