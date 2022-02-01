// function fetch request
async function basketPostInit(id) {
	console.log(`${id}`);
	await fetch('/catalog', {
		method: 'post',
		body: `${id}`
	})
}