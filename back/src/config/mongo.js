import { MongoClient } from 'mongodb'
import config from './index'

let client = null
let db = null

const mongo = async () => {
	try {
		if (client) return client

		client = await MongoClient.connect(config.mongo.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			keepAlive: 3000,
			connectTimeoutMS: 3000,
			socketTimeoutMS: 3000
		})

    db = client.db()

		return client
	} catch (e) {
		throw new Error('Error mongo')
	}
}

export { mongo as default, db }
