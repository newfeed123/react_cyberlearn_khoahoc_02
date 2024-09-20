import React, { Component } from 'react';

class SanPham extends Component {
    render() {
        let {sanPhamProps} = this.props


        return (
            <div className="card text-left">
                <img style={{width: 250, height: 300, marginLeft: 50}} className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
                <div className="card-body text-center">
                    <h4 className="card-title">{sanPhamProps.tenSP}</h4>
                    <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
                    <button onClick={() => { this.props.xemChiTiet(sanPhamProps)}} className='btn btn-success'>Xem chi tiết</button>
                </div>
            </div>
        );
    }
}

export default SanPham;