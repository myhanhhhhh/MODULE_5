import axios from "axios";

const URL_BOOK = "http://localhost:8081/books";
export const getALl = async () => {
    try {
        const response = await axios.get(URL_BOOK);
        return response.data;
    } catch (e) {
        alert("không có dữ liệu")
    }
}
export const create = async (data) => {
    try {
        const response = await axios.post(URL_BOOK, data);
        return response.status
    } catch (e) {
        alert("Fail")
    }
}

export const findById = async (id) => {
    console.log(id)
    try {
        const response = await axios.get(URL_BOOK + `/${id}`);
        console.log(response)
        return response.data
    } catch (e) {
        alert("Fail")
    }
}
export const update = async (data) => {
    try {
        const response = await axios.put(URL_BOOK + `/${data.id}`, data);
        console.log(response)
        return response.status
    } catch (e) {
        alert("fail")
    }
}
export const del = async (data) => {
    console.log(data)
    try {
        const response = await axios.delete(URL_BOOK + `/${data.id}`, data);
        console.log(response)
        return response.status
    } catch (e) {
        alert("fail")
    }
}
