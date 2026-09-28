import { test, expect } from '@playwright/test';

test('test url sobre', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.locator('#ct-nav-links').getByRole('link', { name: 'Sobre' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/sobre');
  await expect(page.locator('#main')).toContainText('// Sobre o evento');
});