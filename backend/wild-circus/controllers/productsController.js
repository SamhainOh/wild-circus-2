const models = require('../models');
const Product = models.Product;



module.exports = {

  index: function (req, res, next) {
    Product.findAll()
      .then((products) => { res.json({ products }); })
      .catch((error) => res.status(500).json({ error }))
  },

  show: function (req, res, next) {
    Product.findByPk(req.params.id)
      .then((product) => { res.json({ product }); })
      .catch((error) => res.status(500).json({ error }))
  },

  create: function (req, res, next) {
    Product.create({
      name: req.body.name,
      category: req.body.category,
      picture: req.body.picture,
      description: req.body.description,
      price: req.body.price
    })
      .then((product) => { res.json({ product }); })
      .catch((error) => res.status(500).json({ error }))
  },

  update: function (req, res, next) {
    Product.findByPk(req.params.id)
      .then((product) => {
        product.update({
          name: req.body.name,
          category: req.body.category,
          picture: req.body.picture,
          description: req.body.description,
          price: req.body.price
        })
          .then((product) => { res.json({ product }); })
          .catch((error) => res.status(500).json({ error }))
      })
      .catch((error) => res.status(500).json({ error }))
  },

  delete: function (req, res, next) {
    Product.findByPk(req.params.id)
      .then((product) => {
        product.destroy()
          .then((product) => { res.json({ message: 'Product has been successfully deleted ' }); })
          .catch((error) => res.status(500).json({ error }))
      })
      .catch((error) => res.status(500).json({ error }))
  }

}