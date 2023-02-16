'use-strict';
module.exports = {
  up: (sequelize, DataTypes) => {
    return sequelize.createTable('user', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      }, 
      
      remarks: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      channel: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: 1
      },
      created_date: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      created_by: {
        type: DataTypes.INTEGER(10),
        allowNull: false
      }    });
  },
  down: (sequelize, DataTypes) => {
    return sequelize.dropTable('user');
  }
};
