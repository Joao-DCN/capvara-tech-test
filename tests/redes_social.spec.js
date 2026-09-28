import { test, expect } from '@playwright/test';


test('test de emcamiar pra rede social instagram', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '◎ Instagram' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://www.instagram.com/sistemasparainternetifpi');
});

test('test de emcamiar pra pagena de contato para envio de email', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.getByRole('link', { name: '✉ contato@' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/contato');
});