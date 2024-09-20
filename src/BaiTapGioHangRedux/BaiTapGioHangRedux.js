import React, { Component } from 'react';
import GioHangRedux from './GioHangRedux';
import ProductListRedux from './ProductListRedux';

import { connect } from 'react-redux';
class BaiTapGioHangRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += spGH.soLuong
        }, 0).toLocaleString()
    }

    render() {
        return (
            <div className='container'>
                <h3>Danh sách sản phẩm</h3>
                <div className="text-right">
                    <span style={{width: 17, cursor: 'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa-solid fa-cart-shopping"></i> ({this.renderSoLuong()}) Giỏ hàng
                    </span>
                </div>
                <ProductListRedux></ProductListRedux>
                <GioHangRedux></GioHangRedux>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gioHang: state.sateGioHang.gioHang
    }
}

export default connect(mapStateToProps) (BaiTapGioHangRedux)
// export default BaiTapGioHangRedux;