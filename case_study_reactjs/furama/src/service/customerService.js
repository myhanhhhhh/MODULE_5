import axios from "axios";

const URL_CUSTOMER = "http://localhost:8081/customers";
const URL_CUSTOMERTYPE = "http://localhost:8081/customerType";
export const getAll = async (data, type) => {
    try {
        const response = await axios.get(URL_CUSTOMER + "?name_like=" + `${data}` + "&customerType.name_like=" + `${type}`+ "&_sort=id&_order=desc");
        console.log(response)
        return response.data;
    } catch (e) {
        alert("Fail")
    }
}
export const getCustomerType = async () => {
    try {
        const response = await axios.get(URL_CUSTOMERTYPE);
        return response.data;
    } catch (e) {
        alert("Fail")
    }
}

export const create = async (data) => {
    try {
        const response = await axios.post(URL_CUSTOMER, data);
        return response
    } catch (e) {
        alert("Fail")
    }
}

export const findById = async (id) => {
    console.log(id)
    try {

        const response = await axios.get(URL_CUSTOMER + `/${id}`);
        console.log(response)
        return response.data
    } catch (e) {
        alert("Fail")
    }
}
export const update = async (data) => {
    try {
        const response = await axios.put(URL_CUSTOMER + `/${data.id}`, data);
        return response
    } catch (e) {
        alert("fail")
    }
}

export const del = async (idCustomer) => {
    try {
        const response = await axios.delete(URL_CUSTOMER + `/${idCustomer}`);
        return response;
    } catch (e) {
        alert("fail")
    }
}
