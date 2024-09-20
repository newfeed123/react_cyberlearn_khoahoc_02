import React, { Component } from 'react';


//sử dụng thư viện connect để lấy dữ liệu từ store về component
import { connect } from 'react-redux'
class GioHangRedux extends Component {
    render() {
        
        console.log(this.props.gioHang)

        return (
            
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{minWidth: 800}}>
                    <div className="modal-header">
                        <h5 className="modal-title">Giỏ hàng</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã SP</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Thành tiền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.gioHang.map((spGH, index) => {
                                return <tr key={index}>
                                    <td>{spGH.maSP}</td>
                                    <td><img style={{width: 50, height: 50}} src={spGH.hinhAnh} alt="1" /></td>
                                    <td>{spGH.tenSP}</td>
                                    <td>{spGH.gia.toLocaleString()}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => {this.props.tangGiamSoLuong(spGH.maSP, false)}}>-</button>
                                        {spGH.soLuong}
                                        <button className='btn btn-primary' onClick={() => {this.props.tangGiamSoLuong(spGH.maSP, true)}}>+</button>
                                    </td>
                                    <td>{(spGH.soLuong * spGH.gia).toLocaleString()}</td>
                                    <td>
                                        <button 
                                            className='btn btn-danger' 
                                            onClick={() => {
                                                this.props.xoaGioHang(spGH.maSP)
                                            }}
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <th colSpan={5}></th>
                            <th>Tổng tiền</th>
                            <th>{this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                return tongTien += spGioHang.soLuong * spGioHang.gia
                            }, 0)}</th>
                        </tfoot>
                    </table>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

//hàm lấy state redux biến dổi thành props của component
const mapStateToProps = (state) => {//sate là state tổng của ứng dụng chứa các state con (rootReducer)
    return {
        gioHang: state.sateGioHang.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            let action = {
                type: 'XOA_GIO_HANG',
                maSP
            }
            dispatch(action)

        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            //tangGiam = true => xử lý tăng, false thì ngc lại

            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam, //ES6 ghi tên biến tự sinh ra tên thuộc tính
            }
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
// export default GioHangRedux;