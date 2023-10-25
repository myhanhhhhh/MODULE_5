import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Bander from './components/bander/Bander';
import Page from './components/page/Page';
import {CustomerList} from "./components/customer/CustomerList";
import ContractList from "./components/contract/ContractList";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Route, Routes} from "react-router-dom";
import CustomerCreate from "./components/customer/CustomerCreate";
import CustomerUpdate from "./components/customer/CustomerUpdate";

function App() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <Header/>
            <Routes>
                <Route path="/" element={<CustomerList/>}/>
                <Route path="/create" element={<CustomerCreate/>}/>
                <Route path="/update/:id" element={<CustomerUpdate/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;