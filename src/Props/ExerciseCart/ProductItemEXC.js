import React, { Component } from 'react';

class ProductItemEXC extends Component {
    render() {
        let {sanPhamProps} = this.props

        return (
            <div className="card text-center">
                <img style={{width: 250, height: 250}} className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
                <div className="card-body text-center">
                    <h4 className="card-title">{sanPhamProps.tenSP}</h4>
                    <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={() => {
                        this.props.themGioHang(sanPhamProps)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>
        );
    }
}

export default ProductItemEXC;