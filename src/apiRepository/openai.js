import { getRequest } from "../network/axios";
import { getChatGptResponseUrl } from "../apiNames/openai";

export const getChatGptResponse = async (obj) => {
    try {
        const result = await getRequest({
            url: getChatGptResponseUrl,
            data: obj,
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