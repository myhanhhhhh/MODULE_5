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
import ContractCreate from "./components/contract/ContractCreate";
import ContractUpdate from "./components/contract/ContractUpdate";
import FacilityList from "./components/facility/FacilityList";
import FacilityCreate from "./components/facility/FacilityCreate";

function App() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <Header/>
            <Routes>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/customers/create" element={<CustomerCreate/>}/>
                <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
                <Route path="/contracts/create" element={<ContractCreate/>}/>
                <Route path="/contracts/update/:id" element={<ContractUpdate/>}/>
                <Route path="/villas" element={<FacilityList/>}/>
                <Route path="/villas/create" element={<FacilityCreate/>}/>

            </Routes>
            {/*<Footer/>*/}
        </>
    );
}

export default App;