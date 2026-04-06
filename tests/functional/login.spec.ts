import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { validUser, invalidUser } from '../../fixtures/testData';

test.describe('Login - Demoblaze', () => {

  test('TC-001 | Login exitoso con credenciales válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(validUser.username, validUser.password);
    await page.waitForTimeout(1500);
    const welcomeText = page.locator('#nameofuser');
    await expect(welcomeText).toBeVisible();
    await expect(welcomeText).toContainText('Welcome');
  });

  test('TC-002 | Login fallido con credenciales inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    page.on('dialog', async dialog => {
      const msg = dialog.message();
      const isValidError =
        msg.includes('User does not exist') ||
        msg.includes('Wrong password') ||
        msg.includes('Please fill out');
      expect(isValidError).toBeTruthy();
      await dialog.accept();
    });

    await loginPage.login(invalidUser.username, invalidUser.password);
    await page.waitForTimeout(2000);
  });

  test('TC-003 | Login con campos vacíos muestra alerta', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toBeTruthy();
      await dialog.accept();
    });

    await loginPage.login('', '');
    await page.waitForTimeout(1000);
  });

});