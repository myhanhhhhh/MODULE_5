import axios from "axios";

const URL_CONTRACT = "http://localhost:8080/contracts";
export const getAll = async () => {
    try {
        const response = await axios.get(URL_CONTRACT);
        return response.data;
    } catch (e) {
        alert("Fail");
    }
}
export const create = async (data) => {
    try {
        const response = await axios.post(URL_CONTRACT, data);
        return response;
    } catch (e) {
        alert("Fail");
    }
}

export const finById = async (id) => {
    try {
        const response = await axios.get(URL_CONTRACT + `/${id}`);
        return response.data;
    } catch (e) {
        console.log(id)
        alert("service Fail");
    }
}

export const update = async (data) => {
    console.log(data)
    try {
        const response = await axios.put(URL_CONTRACT + `/${data.id}`, data);
        return response
    } catch (e) {
        alert("Fail");
    }
}
export const del = async (contractId) => {
    console.log(`sang ga`)
    console.log(contractId +`----------`)
    try {
        const res = await axios.delete(URL_CONTRACT + `/${contractId}`)
        return res;
    } catch (e) {
        alert("Fail");
    }
}