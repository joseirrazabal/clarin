import axios from 'axios'

import { getCount, insertMany } from './controllers/feriados'

const initialize = async () => {
	const total = await getCount()

	if (!total) {
		// desde 2015 hasta 2024
		for (let x = 15; x < 25; x++) {
			console.log('insertando año 20', x)
			const feriados = await axios.get(`http://nolaborables.com.ar/api/v2/feriados/20${x}`)

			await insertMany(
				feriados.data.map(item => {
					return {
						...item,
						year: 2000 + x
					}
				})
			)
		}
	}
}

export default initialize
