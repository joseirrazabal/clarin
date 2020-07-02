import { createServer } from 'http'
import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MongoClient } from 'mongodb'

import config from './config'
import clientMongo from './config/mongo'
import initializeDb from './initialize'
import routes from './routes'

const app = express()
const server = createServer(app)

const start = async () => {
	try {
		await clientMongo()
		initializeDb()

		app.disable('x-powered-by')

		app.use(compression())
		app.use(bodyParser.urlencoded({ extended: true }))
		app.use(bodyParser.json())
		app.use(cors())

		app.use(routes)

		app.use((req, res, next) => {
			const respuesta = {
				error: true,
				codigo: 404,
				mensaje: 'URL no encontrada'
			}
			res.status(404).send(respuesta)
		})

		server.listen({ url: config.host, port: config.port }, () => {
			console.log(`Server en ${config.port}`)
		})
	} catch (e) {
		throw e
	}
}

start().catch(err => {
	console.log('Error al inicializar la app', err)
	server.close()
	process.exit(1)
})
