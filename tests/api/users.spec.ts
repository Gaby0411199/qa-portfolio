import { test, expect } from '@playwright/test';

test.describe('API - JSONPlaceholder', () => {

  test('TC-006 | GET /users retorna lista de usuarios', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0].id).toBeDefined();
    expect(body[0].name).toBeDefined();
  });

  test('TC-007 | POST /posts crea un recurso nuevo', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Gabriel QA',
        body: 'QA Engineer test',
        userId: 1
      }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('Gabriel QA');
    expect(body.id).toBeDefined();
  });

  test('TC-008 | GET /users/999 retorna 404 para usuario inexistente', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/999');
    expect(response.status()).toBe(404);
  });

});