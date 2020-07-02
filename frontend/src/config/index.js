import dotenv from 'dotenv'

dotenv.config()

const config = {
	back_url: process.env.BACK_URL || process.env.REACT_APP_BACK_URL
}

export default config
