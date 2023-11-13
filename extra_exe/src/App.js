import logo from './logo.svg';
import './App.css';
import {ToastContainer} from "react-toastify";
import {Route, Routes} from "react-router-dom";
import {GoodsList} from "./components/GoodsList";
import "react-toastify/dist/ReactToastify.css";
import GoodsCreate from "./components/GoodsCreate";
import GoodsUpdate from "./components/GoodsUpdate";

function App() {
    return (
        <div>
            <ToastContainer>< /ToastContainer>
            <Routes>
                <Route path="/goods" element={<GoodsList/>}/>
                <Route path="/goods/create" element={<GoodsCreate/>}/>
                <Route path="/goods/update/:id" element={<GoodsUpdate/>}/>
            </Routes>
        </div>
    );
}

export default App;
