import { ObjectId } from 'mongodb'

import { db } from '../config/mongo'

const tableName = 'feriados02'

const getCount = async () => {
	const data = await db.collection(tableName).find().count()

	return data
}

const getAll = async () => {
	const data = await db.collection(tableName).find({}).sort({ year: 1, mes: 1, dia: 1 }).toArray()

	return data
}

const getAllByYear = async year => {
	const item = await db.collection(tableName).find({ year: year }).sort({ year: 1, mes: 1, dia: 1 }).toArray()

	return item
}

const getById = async id => {
	const item = await db.collection(tableName).findOne({ _id: ObjectId(id) })

	return item
}

const insertMany = async data => {
	return await db.collection(tableName).insertMany(data)
}

const updateFeriado = async ({ id, motivo, tipo, dia, mes, year, info }) => {
	return await db.collection(tableName).updateOne(
		{ _id: ObjectId(id) },
		{
			$set: {
				motivo,
				tipo,
				tipo,
				dia: parseInt(dia),
				mes: parseInt(mes),
				year: parseInt(year),
				info
			}
		},
		{ upsert: false }
	)
}

const addFeriado = async data => {
	return await db
		.collection(tableName)
		.insertOne({ ...data, dia: parseInt(data.dia), mes: parseInt(data.mes), year: parseInt(data.year) })
}

export { getAll, getAllByYear, getById, getCount, insertMany, updateFeriado, addFeriado }
