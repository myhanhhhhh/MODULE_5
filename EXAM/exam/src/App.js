import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";
import {ToastContainer} from "react-toastify";
import ProductUpdate from "./components/ProductUpdate";

function App() {
    return (
        <div className="App">
            <ToastContainer></ToastContainer>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="/create" element={<ProductCreate/>}/>
                <Route path="/update/:id" element={<ProductUpdate/>}/>
            </Routes>
        </div>
    );
}

export default App;
