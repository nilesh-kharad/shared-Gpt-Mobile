import { getRequest, postRequest } from "../network/axios";
import { getChatGptResponseUrl } from "../apiNames/openai";

export const getChatGptResponse = async (obj) => {
    try {
        const result = await postRequest({
            url: getChatGptResponseUrl,
            data: obj,
            headers: {
                Authorization: 'Bearer MY_TOCKEN_WILL_BE_HERE'
            }
        })
        if (result.status === 200) {
            return result.data
        } else {
            console.error("Error")
        }
    } catch (error) {
        console.error("Error")
    }
}