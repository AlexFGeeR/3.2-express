const path = require('path');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), 'data', 'basket.json');

const basketRepository = {
	async getAll() {
		return await readJsonFile(FILE_PATH) || [];
	},

	async addNew(item){
		
	},
	async remove() {console.log('remove()')}
}


async function isDuplicate(id) {
	let count = 1;
	const rep = await readJsonFile(FILE_PATH) || [];
	rep.forEach(item => {
		if ( item.id === id ) { 
			count++;
		} else {
			count = 1;
		}
	});
	console.log(count);
	return count
}

module.exports = basketRepository;