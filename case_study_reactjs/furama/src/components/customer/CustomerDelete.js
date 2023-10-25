import {toast} from "react-toastify";
import * as customerService from "../../service/customerService"

export function DeleteCustomer({show, select, handleClose}) {
    const deleteCustomer = async (idCustomer) => {
        console.log(idCustomer)
        const response = await customerService.del(idCustomer)
        if (response.status === 200) {
            toast.success("OKE^^")
            handleClose()
            console.log(`----------------`)
        } else {
            toast.error("FAIL")
        }
    };

    // if show === true=> show modal
    // else !== true=> close modal
    return (
        <>
            {
                show && (
                    <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            onClick={handleClose}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Do you want to delete {select.name}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={handleClose}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => deleteCustomer(select.id)}>Delete
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