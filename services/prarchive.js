import axiosInstance from '@/utils/axios'

export const getArchiveData = async () => {
	try {
		const response = await axiosInstance.get('/pr-archive/?populate=deep', {
			timeout: 10000,
		})

		return response
	} catch (error) {
		throw error
	}
}
