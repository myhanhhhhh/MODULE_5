import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import {Route, Routes} from "react-router-dom";
import Todo from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<TodoList/>}/>
            <Route path="/create" element={<TodoCreate/>}/>
        </Routes>
        </>
    );
}

export default App;
