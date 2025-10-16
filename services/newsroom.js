import axiosInstance from '@/utils/axios'

export const getNewsRoomData = async () => {
	try {
		const response = await axiosInstance.get('/newsroom-page/?populate=deep')

		return response
	} catch (error) {
		throw error
	}
}

export const getNewsRoomSEOData = async () => {
	try {
		const response = await axiosInstance.get('/newsrooms?populate=*')

		return response
	} catch (error) {
		throw error
	}
}
