import {toast} from "react-toastify";
import * as facilityService from "../../service/facilityService"

export function DeleteFacility({show, select, handleClose}) {
    const deleteFacility = async (id) => {
        console.log(id)
        const response = await facilityService.del(id)
        console.log(response)
        if (response.status === 200) {
            toast.success("OKE^^")
            handleClose()
            console.log(`----------------`)
        } else {
            toast.error("FAIL")
        }
    };

    // if show === true => show modal
    // else === false => close modal
    return (
        <>
            {
                show && (
                    <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title">Xác nhận xoá</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            onClick={handleClose}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Bạn có muốn xoá dich vu <b style={{color:"red", }}>{select.name} </b>  không ?</p>
                                    <p style={{color: "red"}}>Lưu ý: Hành động này không thể hoàn tác!</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={handleClose}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => deleteFacility(select.id)}>Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}