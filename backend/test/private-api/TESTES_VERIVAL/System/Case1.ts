import { test, expect } from '@playwright/test';

test('criação e reabertura de nota pública', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.keyboard.type('# Minha Nota E2E\nEste é o conteúdo do meu teste.');

  await page.waitForTimeout(3000); // espera autosave
  const noteURL = page.url();

  await page.close();
  await page.context().newPage().goto(noteURL);

  const title = await page.locator('h1').innerText();
  const paragraph = await page.locator('p').innerText();

  expect(title).toBe('Minha Nota E2E');
  expect(paragraph).toBe('Este é o conteúdo do meu teste.');
});
