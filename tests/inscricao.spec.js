import { test, expect } from '@playwright/test';

test('test url inscrição', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Inscreva-se' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/inscrição');
});

test('test exite texto de Observações', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Inscreva-se' }).click();
  await expect(page.getByRole('article')).toContainText('As inscrições são gratuitas a partir do preenchimento do formulário abaixo. Cada participante poderá se inscrever em um minicurso, também gratuito. Vagas limitadas por turma. O evento acontece de 21 a 23 de outubro de 2026, no IFPI Campus São Raimundo Nonato — PI. Atenção: o minicurso Django Girls é exclusivo para mulheres. Traga seu notebook: todos os minicursos são mão na massa.');
});

test('test texto de minicurso Django Girls', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/inscri%C3%A7%C3%A3o');
  await page.getByRole('radio', { name: 'Django Girls' }).check();
  await expect(page.getByText('! Minicurso exclusivo para')).toBeVisible();
  await expect(page.getByRole('alert')).toContainText('O Django Girls é aberto apenas a mulheres. Se esse não é o seu caso, escolha outro minicurso.');
});

test('test button de voltar da pagina de inscrição', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Inscreva-se' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/inscri%C3%A7%C3%A3o');
  await page.getByRole('button', { name: 'Voltar' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/');
});

test('test limpar o form de inscrição', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: 'Inscreva-se' }).click();
  await page.getByRole('textbox', { name: 'Nome *' }).click();
  await page.getByRole('textbox', { name: 'Nome *' }).fill('teste');
  await page.getByRole('textbox', { name: 'Entidade' }).click();
  await page.getByRole('textbox', { name: 'Entidade' }).fill('teste');
  await page.getByRole('textbox', { name: 'Telefone' }).click();
  await page.getByRole('textbox', { name: 'Telefone' }).fill('testes');
  await page.getByRole('textbox', { name: 'E-mail *' }).click();
  await page.getByRole('textbox', { name: 'E-mail *' }).fill('testes');
  await page.getByRole('button', { name: 'Limpar' }).click();
  await expect(page.getByRole('textbox', { name: 'Nome *' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'E-mail *' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'Telefone' })).toHaveValue('');
  await expect(page.getByRole('textbox', { name: 'Entidade' })).toHaveValue('');
});