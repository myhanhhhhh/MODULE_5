import React, {Component} from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                list: [],
                item: ""
            }
    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }
    handleAddItem = () => {
        if (this.state.item) {
            this.setState({
                    ...this.state,
                    list: [...this.state.list, this.state.item]
                }
            )
        }
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input type="text"
                       value={this.state.item}
                       onChange={this.handleChange}/>
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={index}>{item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Todo;
