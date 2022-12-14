# Shopify BOGO Cart Issue Minimum Reproducible Example

->->_Shopify Buy One Get One discount breaks cart functionality._

**Steps to reproduce:**

1. Create a collection listing all products [example](./docs/all-products-collection-example.png)
1. Create a Buy One Get One Discount [example](./docs/bogo-discount-example.png)
1. Using this example code in react-js-buy folder, add a product that is part of the Buy One Get One discount (eg "Foundations in MDMA Safety, Therapeutic Applications & Research") to cart multiple times

**Expected:**

Cart should show line items with quantity.

You should be able to add or remove the line items from cart.

**Actual:**

Strange presentation in the cart with same variant split into multiple line items.

You're unable to remove line items from the cart which are involved in the BOGO discount.

**Video Example:**
Here is a [Loom video](https://www.loom.com/share/dc28262a2e9940d5b3f5833fa5445bab) which demonstrates the issue

## Notes

**Reproduce the bug:**

1. cd into the [react-js-buy](./react-js-buy/) directory
1. `npm install`
1. `npm run start`
1. Then follow the steps to reproduce above

**Codebase:**

This react-js-buy code came from Shopify Repository for [storefront-api-examples](https://github.com/Shopify/storefront-api-examples/tree/master/react-js-buy)
