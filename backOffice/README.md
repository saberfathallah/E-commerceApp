# OYEZ React Training Project

```js
yarn install
yarn start
```

# TODO

### Static Components ###

Display a component `ProductItem` which will contain some very small sub components (ie `Price`, `AddToCartButton`...)

### List of Components ###

Display a list of `ProductItem` with all the needed data passed as react `props` ; the data can be imported from `mockup/` (and mockup data can be extended if needed)

### Basket Component ###

Add a basket/cart component

### Redux ###

Use Redux to add products to basket.

### React-Router ###

Use React-Router (along with Redux) and add a `ProductPage` route.
When you click on a button on `productItem`, you go to this page. 
You can then go back to the product list.

###  Apollo ###

Use Apollo and a very simple GraphQL server to fetch the product data

### Modals, Alerts ###

Propose a way of adding dynamic modals and/or alerts to the page.
You can add a "stock" notion to the GraphQL data set, and decrease it when a user adds a product.
When there is no stock, the product is still displayed, maybe a bit differently, but when you click on the "add" button, it would also display a nice modal.