import express from 'express'
import get from 'lodash/get'

import { getAll, getAllByYear, getById, updateFeriado, addFeriado } from '../controllers/feriados'

const router = express.Router()

router.get('/feriado/:id', async (req, res, next) => {
	const id = get(req, 'params.id')

	const result = await getById(id)

	res.send(result)
})

router.put('/feriado/:id', async (req, res, next) => {
	const obj = get(req, 'body.data', {})

	const result = await updateFeriado(obj)

	res.send(result.result || null)
})

router.post('/feriado', async (req, res, next) => {
	const obj = get(req, 'body.data', {})

	const result = await addFeriado(obj)

	res.send(result)
})

router.get('/feriados/:year', async (req, res, next) => {
	const year = parseInt(get(req, 'params.year'))

	const result = await getAllByYear(year)

	res.send(result)
})

router.get('/feriados', async (req, res, next) => {
	const result = await getAll()

	res.send(result)
})

export default router
