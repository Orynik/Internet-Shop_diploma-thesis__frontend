import { axiosInstance } from './axios-instance'

interface dataParams {
	[key: string]: string | Blob
}

function dataFunc (sendingData: string | dataParams, method = '') {
	// Создаем пустой объект
	if (typeof sendingData !== 'string') {
		const data = new FormData()
		// Добавляем в созданный объект поля
		// Если obj не null добавляем в data ключ-значени obj
		if (sendingData) {
			Object.entries(sendingData).forEach(([key, value]) =>
				data.append(key, value)
			)
		}

		if (method) data.append('_method', method)

		return data
	} else {
		return sendingData
	}
}

const ApiService = {
	get (url: string, params?: object, optional?: object) {
		return axiosInstance.get(url, { params, ...optional })
	},
	post (url = '', data: any, params?: Object, responseType = '') {
		const formData = dataFunc(data)
		let config: object = {
			cache: false,
			params,
			responseType
		}

		if (typeof data === 'string') {
			config = {
				...config,
				headers: { 'Content-Type': 'application/json' },
			}
		}

		return axiosInstance.post(url, formData, config)
	},
	delete (url = '', params?: object) {
		return axiosInstance.delete(url, params)
	},
}

export default ApiService
