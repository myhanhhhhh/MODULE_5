import *as contractService from "../../service/contractService";
import {toast} from "react-toastify";

function DeleteContract({show, select, handleClose}) {
    const deleteContract = async (contractId) => {
        console.log(contractId)
        console.log(`-----true`)
        const res = await contractService.del(contractId);
        if (res.status === 200) {
            toast.success("OKE^^")
            handleClose()
        } else {
            toast.error("FAIL")
        }
    }

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
                                    <p>Bạn có muốn xoá hợp đồng <b style={{color:"red", }}>{select.contractNumber} </b>  không ?</p>
                                    <p style={{color: "red"}}>Lưu ý: Hành động này không thể hoàn tác!</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={handleClose}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => deleteContract(select.id)}>Delete
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
export default DeleteContract;