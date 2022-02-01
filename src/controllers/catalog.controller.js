const { Router } = require('express');
const productsRepository = require('../repositories/products.repository');
const basketRepository = require('../repositories/basket.repository');

const router = new Router();

router.get('/', async (_request, response) => {
	const products = await productsRepository.getAllProducts();
	response.render('pages/catalog', { products: products });
});

router.post('/', async(_request, response) => {
	console.log(_request.body);
})

module.exports = router;