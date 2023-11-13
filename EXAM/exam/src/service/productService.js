import async from "async";
import axios from "axios";

const URL_PRODUCT = "http://localhost:8081/api/products";
const URL_TYPE = "http://localhost:8081/api/types";

export const getAll = async (data1, data2) => {
    try {
        const res = await axios.get(URL_PRODUCT + "?name_like=" + `${data1}` + "&type.name_like=" + `${data2}` + "&_sort=name&_order=aesc")
        return res.data;
    } catch (e) {
        alert("fail")
    }
}
export const getType = async () => {
    try {
        const res = await axios.get(URL_TYPE)
        return res.data;
    } catch (e) {
        alert("fail")
    }
}
export const create = async (data) => {
    try {
        const res = await axios.post(URL_PRODUCT, data)
        return res;
    } catch (e) {
        alert("fail")
    }
}

export const findById = async (id) => {
    try {
        const res = await axios.get(URL_PRODUCT + `/${id}`)
        return res.data;
    } catch (e) {
        alert("fail");
    }
}
export const update = async (data) => {
    try {
        const res = await axios.put(URL_PRODUCT + `/${data.id}`, data)
        return res;
    } catch (e) {
        alert("fail");
    }
}

export const del = async (id) => {
    try {
        const res = await axios.delete(URL_PRODUCT + `/${id}`)
        return res;
    } catch (e) {
        alert("fail")
    }
}


