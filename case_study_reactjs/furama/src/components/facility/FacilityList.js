import {getAll} from "../../service/facilityService";

function FacilityList() {
    const facilities = getAll();

    return (
        <div className="row" style={{margin: "5% 12% 5% 12%", display: "flex"}}>
            {facilities.map((facility) => (
                <div key={facility.id} className="col-xl-4 col-sm-6 col-12"
                     style={{display: "flex", marginBottom: "3%"}}>
                    <div className="card" style={{width: "100%"}}>
                        <img src={facility.imageUrl} className="card-img-top" alt="..." style={{height: "120%"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Room size: {facility.roomSize}</p>
                        </div>
                        <div className="text-end">
                            <a href="#" className="btn btn-primary" style={{marginRight: "10px"}}>Sửa</a>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Xoá
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FacilityList;