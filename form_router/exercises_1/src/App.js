import './App.css';
import React from "react";
import Form from "./conponents/Form";
import ContactForm from "./conponents/Form";
import {Toastify} from "toastify";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <ContactForm/>
            <ToastContainer>

            </ToastContainer>
        </div>
    );
}

export default App;