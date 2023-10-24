import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import {Route, Routes} from "react-router-dom";
import Todo from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <Routes>
                <Route path="/" element={<TodoList/>}/>
                <Route path="/create" element={<TodoCreate/>}/>
            </Routes>
        </>
    );
}

export default App;
