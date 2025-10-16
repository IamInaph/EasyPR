import axiosInstance from '@/utils/axios'

export const getBlogData = async () => {
	try {
		const response = await axiosInstance.get('/blog-page/?populate=deep')

		return response
	} catch (error) {
		throw error
	}
}

export const getBlogSEOData = async () => {
	try {
		const response = await axiosInstance.get('/blogs?populate=*')

		return response
	} catch (error) {
		throw error
	}
}
