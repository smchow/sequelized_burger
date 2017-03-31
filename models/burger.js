

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
  
    bname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    /*order_date: {
       type: DataTypes.DATE,
      allowNull: false,
      defaultValue: now()
    },*/


  }, {
    // Creating a custom method for our User model. This will check if an unhashed password entered by
    // The user can be compared to the hashed password stored in our database
  
  });

  return Burger;

};
