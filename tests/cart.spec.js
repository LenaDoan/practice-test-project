import { test, expect } from '../fixtures/general-fixture.js';

test.describe('Cart page', () => {
    test.beforeEach(async ({ cartPage }) => {
        await cartPage.open();
    });
    test('Verify the cart page is loaded', async ({ cartPage }) => {
        await expect(cartPage.yourCartTitle).toBeVisible();
        await expect(cartPage.continueShoppingButton).toBeVisible();
        await expect(cartPage.checkoutButton).toBeVisible();
        await expect(cartPage.quantityColumn).toBeVisible();
        await expect(cartPage.descriptionColumn).toBeVisible();
    });

    test('Verify that button checkout works correctly', async ({ cartPage }) => {
        await cartPage.clickCheckOut()
        await expect(cartPage.checkoutTitle).toBeVisible();
    });

    test('Verify that button continue shopping works correctly', async ({ cartPage }) => {
        await cartPage.clickContinueShopping();
        await expect(cartPage.productsTitle).toBeVisible();
    });

});