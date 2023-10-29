import axios from "axios";

const URL_VILLA = "http://localhost:8081/villas";
export const getAll = async () => {
    try {
        const response = await axios.get(URL_VILLA);
        return response.data;
    } catch (e) {
        alert("Fail");
    }
}
export const create = async (data) => {
    try {
        const response = await axios.post(URL_VILLA, data);
        return response
    } catch (e) {
        alert("Fail")
    }
}

export const findById = async (id) => {
    console.log(id)
    try {

        const response = await axios.get(URL_VILLA + `/${id}`);
        console.log(response)
        return response.data
    } catch (e) {
        alert("Fail")
    }
}

export const update = async (data) => {
    try {
        const response = await axios.put(URL_VILLA + `/${data.id}`, data);
        return response
    } catch (e) {
        alert("fail")
    }
}

export const del = async (id) => {
    console.log(id)
    try {
        const response = await axios.delete(URL_VILLA + `/${id}`);
        console.log(response)
        console.log(`----true-------`)
        return response;
    } catch (e) {
        alert("fail")
    }
}