import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test('Localizando produtos e completando checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await checkoutPage.addBackpackToCart();
  await checkoutPage.goToCart();
  await checkoutPage.startCheckout();

  await checkoutPage.fillCheckoutInfo('Gabriel', 'Mendes', '60347030');
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();

  const title = await checkoutPage.checkoutCompleteTitle.textContent();
  expect(title).toBe('Checkout: Complete!');
});
