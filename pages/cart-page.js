import { BasePage } from './base-page.js';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);

        this.yourCartTitle = this.page.getByText('Your Cart');
        this.continueShoppingButton = this.page.getByRole('button', { name: 'Continue Shopping' });
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
        this.quantityColumn = this.page.getByTestId('cart-quantity-label');
        this.descriptionColumn = this.page.getByTestId('cart-desc-label');
        this.checkoutTitle = this.page.getByText('Checkout: Your Information');
        this.productsTitle = this.page.getByText('Products');
    }

    async open() {
        await this.page.goto('/cart.html');
    }

    async clickContinueShopping() {
        await this.continueShoppingButton.click();
    }

    async clickCheckOut() {
        await this.checkoutButton.click();
    }
}