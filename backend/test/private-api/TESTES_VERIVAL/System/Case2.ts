test('nota com caracteres especiais e markdown complexo', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.keyboard.type('## Título c/ !@#$\n- Lista com & símbolos\n```js\nconsole.log("teste")\n```');

  await page.waitForTimeout(3000); 
  const noteURL = page.url();

  await page.close();
  await page.context().newPage().goto(noteURL);

  const title = await page.locator('h2').innerText();
  expect(title).toContain('Título c/ !@#$');
  expect(await page.locator('code').innerText()).toContain('console.log("teste")');
});
