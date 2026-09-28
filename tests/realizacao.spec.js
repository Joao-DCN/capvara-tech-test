import { test, expect } from '@playwright/test';

test('test url realização', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.locator('#ct-nav-links').getByRole('link', { name: 'Realização' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/realização');
  await expect(page.locator('#main')).toContainText('// Realização');
});