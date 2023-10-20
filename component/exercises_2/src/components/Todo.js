import React, {Component} from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
class Todo extends Component {
    constructor() {
        super();
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
                       onChange={(temp) => {
                           this.handleChange(temp)
                       }}/>
                <button onClick={this.handleAddItem}>Add</button>
                {this.state.list.map((element, index) =>
                    <p key={index}>{element}</p>
                )}
            </div>
        )
    }
}

export default Todo;
