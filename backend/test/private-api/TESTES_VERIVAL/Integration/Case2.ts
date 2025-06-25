it('deve atualizar e retornar nota via API', async () => {
  const postRes = await request(app).post('/notes').send({ content: 'Inicial' });
  const id = postRes.body.id;

  const patchRes = await request(app).patch(`/notes/${id}`).send({ content: 'Conteúdo atualizado de teste.' });
  expect(patchRes.statusCode).toBe(200);

  const getRes = await request(app).get(`/notes/${id}`);
  expect(getRes.body.content).toBe('Conteúdo atualizado de teste.');
});
