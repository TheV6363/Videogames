const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
//PROBAR
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};