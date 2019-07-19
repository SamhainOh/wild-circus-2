
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [2,20]
      }
    },
    lastname: DataTypes.STRING,
    email:{
      type:DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    street: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};