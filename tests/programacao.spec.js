import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.locator('#ct-nav-links').getByRole('link', { name: 'Programação' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/programação');
  await expect(page.locator('#main')).toContainText('// Programação');
});