import { test, expect } from '@playwright/test';

test('test url contato', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Contato', exact: true }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/contato');
});

test('test button de voltar', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Contato', exact: true }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/contato');
  await page.getByRole('button', { name: 'Voltar' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/');
});

test('test limpar o form de contato', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Contato', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nome *' }).click();
  await page.getByRole('textbox', { name: 'Nome *' }).fill('teste');
  await page.getByRole('textbox', { name: 'E-mail *' }).click();
  await page.getByRole('textbox', { name: 'E-mail *' }).fill('teste');
  await page.getByRole('textbox', { name: 'Assunto *' }).click();
  await page.getByRole('textbox', { name: 'Assunto *' }).fill('teste');
  await page.getByRole('textbox', { name: 'Mensagem *' }).click();
  await page.getByRole('textbox', { name: 'Mensagem *' }).fill('teste');
  await page.getByRole('button', { name: 'Limpar' }).click();
  await expect(page.getByRole('textbox', { name: 'Nome *' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'E-mail *' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'Assunto *' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'Mensagem *' })).toHaveValue('');
});