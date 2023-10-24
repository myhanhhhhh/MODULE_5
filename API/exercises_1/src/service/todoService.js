import axios from "axios";

const URL_TODO = "http://localhost:8080/todo";
export const getALl = async () => {
    try {
        const response = await axios.get(URL_TODO);
        return response.data;
    } catch (e) {
        alert("không có dữ liệu")
    }
}
export const create = async (data) => {
    try {
        const response = await axios.post(URL_TODO, data);
        return response.status
    } catch (e) {
        alert("Fail")
    }
}

