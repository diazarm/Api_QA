const request = require('supertest');
const { app, init } = require('../app');
const db = require('../models');

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await db.sequelize.close();
});

describe('GET /tasks', () => {
  it('should return an array of tasks', async () => {
    const res = await request(app).get('/tasks');
    console.log(res.body); // 👈 para debug
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
    console.log(res.body); // 👈 para debug
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(newTask.title);
    expect(res.body.description).toEqual(newTask.description);
  });
});

describe('GET /tasks/:id', () => {
  it('should return a task by ID', async () => {
    const res = await request(app).get('/tasks/1');
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
  });

  it('should return 404 for non-existing task', async () => {
    const res = await request(app).get('/tasks/9999');
    console.log(res.body);
    expect(res.statusCode).toEqual(404);
  });
});
