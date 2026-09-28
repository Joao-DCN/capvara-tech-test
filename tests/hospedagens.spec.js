import { test, expect } from '@playwright/test';

test('test url hospedagens', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/');
  await page.locator('#ct-nav-links').getByRole('link', { name: 'Hospedagens' }).click();
  await expect(page).toHaveURL('https://sistemasparainternet.com/hospedagens');
  await expect(page.locator('h1')).toContainText('Hospedagens em São Raimundo Nonato');
});


test('test lista de hospedagens visivel', async ({ page }) => {
  await page.goto('https://sistemasparainternet.com/hospedagens');
  await expect(page.getByRole('list')).toContainText('Pousada Zabelê Tipo de hospedagem: Pousada Endereço: Praça Major Toinho, 280 - Centro, São Raimundo Nonato – PI, 64770-000 Contatos: (89) 98136-0717 Valor: R$ 150 a 260 (sujeito à alteração) Inclui café da manhã Acomodações: Quartos individuais, duplos e triplos');
  await expect(page.getByText('Pousada Zabelê Tipo de hospedagem: Pousada Endereço: Praça Major Toinho, 280 -')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Mega Express Hotel I Tipo de hospedagem: Hotel Endereço: Praça Major Toinho, 401, Centro, São Raimundo Nonato PI, 64770-000 Contatos: (89) 98109-1555, (WhatsApp) e megaexpresshotel@gmail.com Valores: R$ 100 a 150 (sujeitos à alteração) Não inclui café da manhã Acomodações: 08 quarto duplo, 04 quarto casal 1 cama');
  await expect(page.getByText('Mega Express Hotel I Tipo de hospedagem: Hotel Endereço: Praça Major Toinho,')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Mega Express Hotel II Tipo de hospedagem: Hotel Endereço: Av. Coronel Milanez, s/n - Bairro Cipó, São Raimundo Nonato – PI, 64770-000 Contatos: (89) 98109-1555, (WhatsApp) e megaexpresshotel2@gmail.com Valores: R$ 145 a 210 (sujeitos à alteração) Inclui café da manhã Acomodações: 03 quartos duplo, 04 quarto individual, 08 quarto casal');
  await expect(page.getByText('Mega Express Hotel II Tipo de hospedagem: Hotel Endereço: Av. Coronel Milanez,')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Asa Delta Pousada Tipo de hospedagem: Pousada Endereço: Saída para Coronel José Dias BR 020, São Raimundo Nonato – PI, 64770-000 Contatos: (89) 98146-0033 e https://pousadaasadeltasrn.com.br Valores: R$ 145 a 210 (sujeitos à alteração) Inclui café da manhã Acomodações: 03 quartos duplo, 04 quarto individual, 08 quarto casal');
  await expect(page.getByText('Asa Delta Pousada Tipo de hospedagem: Pousada Endereço: Saída para Coronel Jos')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Pousada Ninho da Seriema Tipo de hospedagem: Pousada Endereço: Avenida Coronel Milanez, São Raimundo Nonato – PI, 64770-000 (Ao lado da rodoviária) Contatos: (89) 98117-5920 e (WhatsApp) Valor: R$ 90 (sujeito à alteração) Inclui café da manhã Acomodações: 26 quartos duplos ou triplos');
  await expect(page.getByText('Pousada Ninho da Seriema Tipo de hospedagem: Pousada Endereço: Avenida Coronel')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('Hotel Bela Vista Tipo de hospedagem: Hotel Endereço: R. Dr. Raul Macedo, 95 - Centro, São Raimundo Nonato – PI, 64770-000 Contatos: (89) 98103-5190 e (89) 98120-5190 Valor: R$ 90 a 120 (sujeito à alteração) Inclui café da manhã Acomodações: Quartos individuais, duplos e triplos. Capacidade de 65 a 70 pessoas');
  await expect(page.getByText('Hotel Bela Vista Tipo de hospedagem: Hotel Endereço: R. Dr. Raul Macedo, 95 -')).toBeVisible();
});