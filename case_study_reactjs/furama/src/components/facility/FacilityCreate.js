function FacilityCreate(){
    return(
        <div className="content col-lg-8 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: "2rem"}}>
            <div id="form" className=" text-center p-5">
                <h1 className="mb-4" style = {{color: "white"}}>Thêm mới dịch vụ</h1>
                <div className="row g-3">
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control border-0" id="name"
                                   placeholder="Tên dịch vụ"/>
                                <label htmlFor="name">Tên dịch vụ</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="number" className="form-control border-0" id="area"
                                   placeholder="Diện tích"/>
                                <label htmlFor="area">Diện tích</label>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-floating">
                            <input type="number" className="form-control border-0" id="cost"
                                   placeholder="Chi phí thuê"/>
                                <label htmlFor="cost">Chi phí thuê</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="number" className="form-control border-0" id="peopleNumber"
                                   placeholder="Số lượng người đối đa"/>
                                <label htmlFor="peopleNumber">Số lượng người đối đa</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control border-0" id="rentType"
                                   placeholder="Kiểu thuê"/>
                                <label htmlFor="rentType">Kiểu thuê</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <select className="form-control border-0" id="roomType"
                                    placeholder="Tiêu chuẩn phòng" style = {{backgroundColor: "white"}}>
                                <option>Standard</option>
                                <option>Superior</option>
                                <option>Executive</option>
                                <option>Deluxe</option>
                                <option>Suite</option>
                                <option>President</option>
                            </select>
                            <label htmlFor="roomType">Tiêu chuẩn phòng</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="number" className="form-control border-0" id="floorNumber"
                                   placeholder="Số tầng"/>
                                <label htmlFor="floorNumber">Số tầng</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="number" className="form-control border-0" id="swimmingPoolArea"
                                   placeholder="Diện tích hồ bơi"/>
                                <label htmlFor="swimmingPoolArea">Diện tích hồ bơi</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-light w-100 py-3" type="button"><a href="facility_list.html">Hủy
                            bỏ</a></button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-dark w-100 py-3" type="submit">Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FacilityCreate