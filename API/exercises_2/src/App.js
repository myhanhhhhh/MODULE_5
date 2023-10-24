import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {BookList} from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BookUpdate from "./components/BookUpdate";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <Routes>
                <Route path="/" element={<BookList/>}/>
                <Route path="/create" element={<BookCreate/>}/>
                <Route path="/update/:id" element={<BookUpdate/>}/>
            </Routes>
        </>
    );
}

export default App;
