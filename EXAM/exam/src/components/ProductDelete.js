import {toast} from "react-toastify";
import * as productService from "../service/productService"

function ProductDelete({show, select, handleClose}) {
    const deleteGoods = async (id) => {
        const res = await productService.del(id)
        if (res.status === 200) {
            toast.success("OKE^^")
            handleClose();
        } else {
            toast.error("FAIL")
        }
    }
    return (
        <div>
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
                                    <p>Bạn có muốn xoá hang hoa <b style={{color: "red",}}>{select.name} </b> không ?</p>
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
        </div>
    )

}
export default ProductDelete