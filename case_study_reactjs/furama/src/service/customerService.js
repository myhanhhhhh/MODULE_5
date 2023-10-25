import axios from "axios";

const URL_CUSTOMER = "http://localhost:8080/customers";
const URL_CUSTOMERTYPE = "http://localhost:8080/customerType";
export const getAll = async () => {
    try {
        const response = await axios.get(URL_CUSTOMER);
        console.log(response)
        return response.data;
    } catch (e) {
        alert("không có dữ liệu")
    }
}
export const getCustomerType = async () => {
    try {
        const response = await axios.get(URL_CUSTOMERTYPE);
        return response.data;
    } catch (e) {
        alert("không có dữ liệu")
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

// export function del(xyz) {
//     try {
//         const response = axios.delete(URL_CUSTOMER + `/${xyz}`);
//         return response;
//     } catch (e) {
//         alert("fail")
//     }
// }

export const del = async (idCustomer) => {
    try {
        const response = await axios.delete(URL_CUSTOMER + `/${idCustomer}`);
        return response;
    } catch (e) {
        alert("fail")
    }
}
