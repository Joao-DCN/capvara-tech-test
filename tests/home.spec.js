import { test, expect } from '@playwright/test';

test('test modo ler mais dos cards', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await expect(page.getByRole('button', { name: 'Ler mais sobre Aldo Victor D' })).toBeVisible();
  await page.getByRole('button', { name: 'Ler mais sobre Aldo Victor D' }).click();
  await expect(page.locator('#ct-speaker-modal-bio')).toBeVisible();
  await expect(page.getByRole('dialog', { name: 'Aldo Victor D. Oliveira' })).toBeVisible();
});