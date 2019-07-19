const models = require('../models');
const Cart = models.Cart;



module.exports = {

  index: function (req, res, next) {
    Cart.findAll()
      .then((carts) => { res.json({ carts }); })
      .catch((error) => res.status(500).json({ error }))
  },

  show: function (req, res, next) {
    Cart.findByPk(req.params.id, { include: 'user' })
      .then((cart) => { res.json({ cart }); })
      .catch((error) => res.status(500).json({ error }))
  },

  create: function (req, res, next) {
    Cart.create({
      statut: req.body.statut,
      user_id: req.body.user_id
    })
      .then((cart) => { res.json({ cart }); })
      .catch((error) => res.status(500).json({ error }))
  },

  update: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => {
        cart.update({
          statut: req.body.statut,
          user_id: req.body.user_id
        })
          .then((cart) => { res.json({ cart }); })
          .catch((error) => res.status(500).json({ error }))
      })
      .catch((error) => res.status(500).json({ error }))
  },

  delete: function (req, res, next) {
    Cart.findByPk(req.params.id)
      .then((cart) => {
        cart.destroy()
          .then((cart) => { res.json({ message: 'Cart has been successfully deleted ' }); })
          .catch((error) => res.status(500).json({ error }))
      })
      .catch((error) => res.status(500).json({ error }))
  }
}