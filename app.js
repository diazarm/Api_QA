const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

const { Task } = db;

// Rutas
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

app.get('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) res.json(task);
  else res.status(404).json({ error: 'Tarea no encontrada' });
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else res.status(404).json({ error: 'Tarea no encontrada' });
});

app.delete('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.json({ message: 'Tarea eliminada' });
  } else res.status(404).json({ error: 'Tarea no encontrada' });
});

module.exports = app;
