import React, {useEffect, useState} from "react";
import async from "async";
import * as bookService from "../service/bookService" ;
import axios from "axios";
import {NavLink} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export function BookList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        display();
    }, []);

    const display = async () => {
        let response = await bookService.getALl()
        setBooks(response);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBook(null);
    };

    const handleShowModal = (book) => {
        setSelectedBook(book);
        setShowModal(true);
    };

    const deleteBook = async () => {
        const status = await bookService.del(selectedBook);
        console.log(status)
        setBooks(await bookService.getALl());
        if (status === 200) {
            handleCloseModal()
            navigate("/");
            toast("OKE");
        } else {
            toast("FAIL")
        }
    };


    return (
        <div className="container-fluid">
            <NavLink to="/create">
                <button style={{marginTop: "15px"}} className="btn btn-success">Create</button>
            </NavLink>
            <h1 style={{textAlign: "center"}}>Todo List</h1>
            <table className="table table-striped">
                <thead>
                <tr style={{textAlign: "center"}}>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={index} style={{textAlign: "center"}}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <NavLink to={`/update/${book.id}`}>
                                <button className="btn btn-primary">Update</button>
                            </NavLink>
                            <Button style={{marginLeft: "10px"}} variant="btn btn-danger"
                                    onClick={() => handleShowModal(book)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <MyModal action={handleCloseModal} book={selectedBook} onDelete={deleteBook}/>
            </Modal>
        </div>
    )
}

function MyModal(props) {
    const {action, book, onDelete} = props;
    const handleDelete = () => {
        onDelete();
    };
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Delete {book?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete {book?.title}?</Modal.Body>
            <Modal.Footer>
                <Button variant="btn btn-outline-secondary" onClick={action}>
                    Close
                </Button>
                <Button variant="btn btn-outline-danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </>
    );
}

export default BookList