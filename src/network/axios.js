import axios from "axios";

export const getRequest = async ({ headers = {}, url, data }) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            params: {
                ...data,
            },
        })
        return response
    } catch (error) {
        console.error(error)
        return { statusText: 'NOT_OK' }
    }
}
export async function postRequest({ headers = {}, url, data }) {
    try {
        const response = await axios.post(url, data, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        })
        return response
    } catch (error) {
        console.error(error)
        return { statusText: 'NOT_OK' }
    }
}
