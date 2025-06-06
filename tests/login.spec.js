import { test, expect } from '@playwright/test';

test('Acessando pagina de login', async ({ page }) => {
    await page.goto ('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();
    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

    const productTitle = await page.locator('.header_secondary_container > span');
    await expect (productTitle).toHaveText('Products');
})

