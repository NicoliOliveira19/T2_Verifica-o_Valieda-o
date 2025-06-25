import request from 'supertest';
import { app } from '../main'; 

it('deve criar e buscar uma nota via API', async () => {
  const postRes = await request(app)
    .post('/notes')
    .send({ content: '# Teste de Integracao API' });

  expect(postRes.statusCode).toBe(201);
  const { id } = postRes.body;

  const getRes = await request(app).get(`/notes/${id}`);
  expect(getRes.statusCode).toBe(200);
  expect(getRes.body.content).toBe('# Teste de Integracao API');
});
