import './App.css';
import './index.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Facility from "./components/facility/Facility";
import Bander from "./components/bander/Bander";
import FacilityCreate from "./components/facility/FacilityCreate";
import Page from "./components/page/Page";
import CustomerList from "./components/customer/CustomerList";

function App() {
    return (
        <>
            <Header/>
            <Bander/>
            <div id="content" className="container">
                <div className="row">
                    <Facility/>
                    <Facility/>
                    <Facility/>

                    <Facility/>
                    <Facility/>
                    <Facility/>

                    <Facility/>
                    <Facility/>
                    <Facility/>

                </div>
            </div>
            <CustomerList/>
            <Page/>
            <Footer/>
        </>
    );
}

export default App;
