const { Router } = require('express');
const basketRepository = require('../repositories/basket.repository');


const router = new Router();

router.get('/', async (_request, response) => {
	const list = await basketRepository.getAll();
	response.render('pages/basket', { list: list } );
});

module.exports = router;