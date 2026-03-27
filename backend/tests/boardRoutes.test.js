import request from 'supertest';
import { describe, expect, it, vi, afterEach } from 'vitest';
import app from '../src/app.js';
import * as taskService from '../src/services/taskService.js';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('GET /api/board', () => {
  it('returns 200 and a payload with columns and tasks', async () => {
    const response = await request(app).get('/api/board');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('columns');
    expect(response.body).toHaveProperty('tasks');
    expect(Array.isArray(response.body.columns)).toBe(true);
    expect(Array.isArray(response.body.tasks)).toBe(true);

    if (response.body.columns.length > 0) {
      expect(response.body.columns[0]).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String)
        })
      );
    }

    if (response.body.tasks.length > 0) {
      expect(response.body.tasks[0]).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          color: expect.stringMatching(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/),
          columnId: expect.any(String)
        })
      );
    }
  });

  it('returns 500 when an internal error occurs', async () => {
    vi.spyOn(taskService, 'getBoardData').mockImplementation(() => {
      throw new Error('Simulated failure');
    });

    const response = await request(app).get('/api/board');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal server error' });
  });
});
