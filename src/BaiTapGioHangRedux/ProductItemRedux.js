import React, { Component } from 'react';

import { connect } from 'react-redux';

class ProductItemRedux extends Component {


    render() {
        let {product} = this.props

        return (
            <div>
                <div className="card text-left">
                    <img style={{width: 300, height: 300}} className="card-img-top" src={product.hinhAnh} alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{product.tenSP}</h4>
                        <p className="card-text">{product.giaBan.toLocaleString()}</p>
                        <button 
                            className='btn btn-success' 
                            onClick={() => {
                                this.props.themGioHang(product)
                            }}>
                            Thêm giỏ hàng
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

//hàm gửi dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return {
        //tạo props themGioHang (props này là 1 function() ) để đưa dữ liệu lên redux
        themGioHang: (sanPham) => {
            //sanPham : là sản phẩm dc click
            //Tạo ra sp giỏ hàng
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                gia: sanPham.giaBan,
            }

            //tạo ra action
            let action = {
                type: 'THEM_GIO_HANG', //thuoc tính bắt buộc
                spGioHang
            }

            //dùng hàm dispatch từ redux => gửi dữ liệu lên reducer
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps) (ProductItemRedux)
// export default ProductItemRedux;