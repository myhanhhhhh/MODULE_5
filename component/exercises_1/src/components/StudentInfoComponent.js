import React, {Component} from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        id: 1,
                        name: 'Mỹ Liên',
                        age: '20',
                        address: 'Đà Nẵng'
                    },
                    {
                        id: 2,
                        name: 'Mỹ Hạnh',
                        age: '21',
                        address: 'Đà Nẵng'
                    }
                ]
        }
    }
    render()
    {
        return (
            <div>
                <h1>Students</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentInfoComponent;
