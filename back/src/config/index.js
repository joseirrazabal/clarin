import dotenv from 'dotenv'

dotenv.config()

const config = {
	host: process.env.HOST || '0.0.0.0',
	port: process.env.PORT || '5000',
	mongo: {
		url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/feriados'
	}
}

export default config
