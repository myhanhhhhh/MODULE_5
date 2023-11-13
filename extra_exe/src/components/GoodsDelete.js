import {toast} from "react-toastify";
import * as goodsService from "../service/goodsService"

export function DeleteGoods({show, select, handleClose}) {
    const deleteGoods = async (id) => {
        console.log(id)
        const response = await goodsService.del(id)
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
                                    <p>Bạn có muốn xoá hàng hoá <b style={{color:"red", }}>{select.name} </b>  không ?</p>
                                    <p style={{color: "red"}}>Lưu ý: Hành động này không thể hoàn tác!</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={handleClose}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => deleteGoods(select.id)}>Delete
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