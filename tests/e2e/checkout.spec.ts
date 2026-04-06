import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { validUser, products } from '../../fixtures/testData';

test.describe('E2E - Flujo completo de compra', () => {

  test('TC-004 | Usuario puede agregar producto al carrito', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await page.waitForTimeout(1500);
    await page.click(`text=${products.phone}`);
    await expect(page).toHaveURL(/prod/);
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    });
    await page.click('text=Add to cart');
    await page.waitForTimeout(1500);
  });

  test('TC-005 | Carrito muestra productos agregados', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    await page.click('#cartur');
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('h2').first()).toContainText('Products');
  });

});