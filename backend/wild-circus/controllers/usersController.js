const models = require('../models');
const User = models.User;



module.exports = {

    index: function (req, res, next) {
        User.findAll()
            .then((users) => { res.json({ users }); })
            .catch((error) => res.status(500).json({ error }))
    },

    show: function (req, res, next) {
        User.findByPk(req.params.id)
            .then((user) => res.json(user))
            .catch((error) => res.status(500).json({ error }))
    },

    create: function (req, res, next) {
        User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            street: req.body.street,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.city
        })
            .then((user) => { res.json({ user }); })
            .catch((error) => res.status(500).json({ error }))
    },

    update: function (req, res, next) {
        User.findByPk(req.params.id)
            .then((user) => {
                user.update({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                    street: req.body.street,
                    zip: req.body.zip,
                    city: req.body.city,
                    country: req.body.city
                })
                    .then((user) => { res.json({ user }); })
                    .catch((error) => res.status(500).json({ error }))
            })
            .catch((error) => res.status(500).json({ error }))
    },

    delete: function (req, res, next) {
        User.findByPk(req.params.id)
            .then((user) => {
                user.destroy()
                    .then((user) => { res.json({ message: 'User has been deleted successfully' }); })
                    .catch((error) => res.status(500).json({ error }))
            })
            .catch((error) => res.status(500).json({ error }))
    }
}