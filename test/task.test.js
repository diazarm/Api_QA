const request = require('supertest');
const { app, init } = require('../app');
const db = require('../models');


beforeAll(async () => {
  await init(); // ← Espera la conexión antes de correr los tests

describe('GET /tasks', () => {
  it('should return an array of tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /tasks', () => {
  it('should create a new task', async () => {
    const newTask = {
      title: 'Test Task',
      description: 'This is a test task'
    };

    const res = await request(app).post('/tasks').send(newTask);
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(newTask.title);
    expect(res.body.description).toEqual(newTask.description);
  });
});
describe('GET /tasks/:id', () => {
  try {it('should return a task by ID', async () => {
    const res = await request(app).get('/tasks/1'); // Asumiendo que la tarea con ID 1 existe
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });
    
  } catch (error) {
    console.error(error); // 👈 log detallado
  res.status(500).json({ error: error.message });
  }

   try {it('should return 404 for non-existing task', async () => {
    const res = await request(app).get('/tasks/9999'); // ID que no existe
    expect(res.statusCode).toEqual(404);
  });
   } catch (error) {
    console.error(error); // 👈 log detallado
  res.status(500).json({ error: error.message });
  }
});

});

afterAll(async () => {
  await db.sequelize.close();
});
