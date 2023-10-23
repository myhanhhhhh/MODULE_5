import logo from './logo.svg';
import './App.css';
import MedicalForm from "./conmponents/MedicalForm";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <MedicalForm/>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
