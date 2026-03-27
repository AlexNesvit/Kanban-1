import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/app.js';

describe('POST /api/tasks validation', () => {
  it('rejects request when color has invalid format', async () => {
    const response = await request(app).post('/api/tasks').send({
      name: 'Task with invalid color',
      color: 'blue',
      columnId: 'todo'
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('Field "color"');
  });

  it('rejects request when columnId does not exist', async () => {
    const response = await request(app).post('/api/tasks').send({
      name: 'Task with unknown column',
      color: '#22C55E',
      columnId: 'unknown-column'
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toContain('Field "columnId" must reference an existing column.');
  });
});
