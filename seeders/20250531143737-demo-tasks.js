'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Aprender Sequelize',
        description: 'Estudiar cómo hacer migraciones y seeders',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Configurar API',
        description: 'Levantar servidor Express con rutas CRUD',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Testear endpoints',
        description: 'Probar desde Postman los métodos GET y POST',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
