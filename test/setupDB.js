// tests/setupDB.js
// ------------------------------------------------
// Este archivo se ejecutará UNA vez antes de
// correr cualquier test. Su objetivo es borrar
// las tablas existentes y volver a crearlas.
// ------------------------------------------------

const { sequelize } = require('../models/index.js');

module.exports = async () => {
  // BORRA todas las tablas (si existen) según tus models
  await sequelize.drop();

  // VUELVE a crear las tablas según las definiciones de models
  await sequelize.sync();
};
