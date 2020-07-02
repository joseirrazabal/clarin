import axios from 'axios'
import config from '../config'

const instance = axios.create({
	baseURL: config.back_url
})

instance.interceptors.request.use(
	config => {
		return {
			...config,
			params: {
				...config.params
			}
		}
	},
	error => {
		return Promise.reject(error)
	}
)

export default instance
