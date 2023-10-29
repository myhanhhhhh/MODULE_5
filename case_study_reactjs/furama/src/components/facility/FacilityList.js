import React, {useEffect, useState} from "react";
import * as facilityService from "../../service/facilityService"
import {DeleteCustomer} from "../customer/CustomerDelete";
import {DeleteFacility} from "./FacilityDelete";

function FacilityList() {
    const [villas, setVillas] = useState([]);
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const display = async () => {
        const res = await facilityService.getAll();
        console.log(res)
        setVillas(res);
    }

    const handleModal = async (value) => {
        setShowModal(true);
        setSelectedFacility(value);
    }

    const closeModal = async () => {
        display()
        setShowModal(false);
    }

    useEffect(() => {
        display()
    }, [])

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>Danh sách Villa</h1>
            <div className="row row-cols-2 row-cols-md-3 g-5">
                {villas.map((service) => (
                    <div key={service.id} className="col">
                        <div className="card h-100">
                            <img src={service.image} className="card-img-top" alt={"..."}/>
                            <div className="card-body" style={{textAlign: "center"}}>
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">Room size: {service.area}</p>
                            </div>
                            <div className="card-icons" style={{textAlign: "center", marginBottom: "10px"}}>
                                <button className="btn btn-primary">Sửa</button>
                                <button className="btn btn-danger ms-2"
                                        onClick={() => handleModal(villas)}>Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <DeleteFacility
                    show={showModal}
                    select={selectedFacility}
                    handleClose={closeModal}>
                </DeleteFacility>
            </div>
        </div>

    )
}

export default FacilityList