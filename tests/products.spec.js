import { test, expect } from '@playwright/test';
test('Localizando produtos', async ({ page }) => {
    await test.step('login', async () => {
        await page.goto ('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
  });
    await page.locator("[name='add-to-cart-sauce-labs-backpack']").click();
    await page.locator("[data-test='shopping-cart-link']").click();
    await page.locator("[name='checkout']").click();
    await page.locator("[data-test='firstName']").fill('Gabriel');
    await page.locator("[data-test='lastName']").fill('Mendes');
    await page.locator("[name='postalCode']").fill('60347030');
    await page.locator("[data-test='continue'][name='continue']").click();
    await page.locator("[data-test='finish']").click();
    
    const productTitle = await page.locator("[data-test='secondary-header'] > span");
    await expect (productTitle).toHaveText('Checkout: Complete!'); 
})