
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {

      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      businessName: {
        type: DataTypes.STRING,
      },

    });
  };