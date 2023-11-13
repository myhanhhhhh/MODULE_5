import axios from "axios";

const URL_GOODS = "http://localhost:8082/goods";
const URL_GOODSTYPES= "http://localhost:8082/goodsTypes";
export const getAll = async (data, type) => {
    try {
        const response = await axios.get(URL_GOODS + "?name_like=" + `${data}` + "&goodsType.name_like=" + `${type}` + "&_sort=id&_order=desc");
        console.log(response)
        return response.data;
    } catch (e) {
        alert("Fail")
    }
}

export const getGoodsType = async () => {
    try {
        const response = await axios.get(URL_GOODSTYPES);
        console.log(response.data);
        return response.data;
    } catch (e) {
        alert("Fail")
    }
}

export const create = async (data) => {
    try {
        const response = await axios.post(URL_GOODS, data);
        return response
    } catch (e) {
        alert("Fail")
    }
}

export const findById = async (id) => {
    console.log(id)
    try {

        const response = await axios.get(URL_GOODS + `/${id}`);
        console.log(response)
        return response.data
    } catch (e) {
        alert("Fail")
    }
}
export const update = async (data) => {
    try {
        const response = await axios.put(URL_GOODS + `/${data.id}`, data);
        return response
    } catch (e) {
        alert("fail")
    }
}

export const del = async (idCustomer) => {
    try {
        const response = await axios.delete(URL_GOODS + `/${idCustomer}`);
        return response;
    } catch (e) {
        alert("fail")
    }
}
