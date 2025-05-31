const db = require('./models');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log('🔌 Conexión a la base de datos establecida.');

    const { Task } = db;

    // Rutas
    app.get('/tasks', async (req, res) => {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    });

    app.post('/tasks', async (req, res) => {
      const task = await Task.create(req.body);
      res.status(201).json(task);
    });

    app.get('/tasks/:id', async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      if (task) res.status(200).json(task);
      else res.status(404).json({ error: 'Tarea no encontrada' });
    });

    app.put('/tasks/:id', async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.update(req.body);
        res.status(200).json(task);
      } else res.status(404).json({ error: 'Tarea no encontrada' });
    });

    app.delete('/tasks/:id', async (req, res) => {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.destroy();
        res.status(200).json({ message: 'Tarea eliminada' });
      } else res.status(404).json({ error: 'Tarea no encontrada' });
    });

  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
  }
})();

async function init() {
  try {
    await db.sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    throw error;
  }
}

module.exports = { app, init };
