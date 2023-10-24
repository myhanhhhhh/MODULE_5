import React, {useEffect, useState} from "react";
import async from "async";
import * as TodoService from "../../src/service/TodoService" ;
import axios from "axios";
import {NavLink} from "react-router-dom";

export function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        display();
    }, []);
    const display = async () => {
        let response = await TodoService.getALl()
        setTodos(response);
    }


    return (
        <div>
            <NavLink to="/create"><button className="btn btn-primary">Create</button></NavLink>
            <h1>Todo List</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>userId</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "yes":"no"}</td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList