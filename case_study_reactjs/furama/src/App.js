import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Bander from './components/bander/Bander';
import Page from './components/page/Page';
import {getAll} from './service/customerService';
import CustomerList from "./components/customer/CustomerList";
import ContractList from "./components/contract/ContractList";
import FacilityList from "./components/facility/FacilityList";

function App() {
    const customers = getAll();
    return (
        <>
            <Header/>
            {/*<CustomerList/>*/}
            {/*<ContractList/>*/}
            <FacilityList/>
            {/*<Page/>*/}

            <Footer/>

            {/*<Footer/>*/}
        </>
    );
}

export default App;