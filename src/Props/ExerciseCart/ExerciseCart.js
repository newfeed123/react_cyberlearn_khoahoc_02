import React, { Component } from 'react';
import CartModal from './CartModal';
import ProductListEXC from './ProductListEXC';

class ExerciseCart extends Component {

    state = {
        gioHang: []
    }

    themGioHang = (sanPham) => {
        console.log(sanPham)
        let spGioHang = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            donGia: sanPham.giaBan,
            soLuong: 1,
            hinhAnh: sanPham.hinhAnh,
        }

        //tìm xem sản phẩm đã có trong giỏ hàng chưa
        let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP)
        if (index != -1){
            //tim thay sản phẩm dc click có chứa trong giỏ hàng
            this.state.gioHang[index].soLuong += 1
        }
        else {
            //ko tìm thấy
            this.state.gioHang.push(spGioHang)
        }
        //push vaof gio hang
        // this.state.gioHang.push(spGioHang)
        // let gioHangCapNhat = [...this.state.gioHang]


        this.setState({
            gioHang: this.state.gioHang
        })
    }

    xoaGioHang = (maSP) => {
        //thực hiện tính năng xóa giỏ hàng
        console.log(maSP)
        let index = this.state.gioHang.findIndex(spGioHang => 
            spGioHang.maSP === maSP
        )
        if(index !== -1){
            this.state.gioHang.splice(index, 1)
        }
        this.setState({
            gioHang: this.state.gioHang
        })
    }

    tinhTongSoLuong = () => {
        // let tongSoLuong = 0
        // for(let i = 0; i < this.state.gioHang.length; i++){
        //     let spGioHang = this.state.gioHang[i]
        //     tongSoLuong +=spGioHang.soLuong
        // }
        // return tongSoLuong


        //reduce
        return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => {
            return tongSoLuong += spGioHang.soLuong
        }, 0)
    }


    render() {
        return (
            <div className='container-fluid'>
                <h3 className='text-center'>Bài tập giỏ hàng</h3>
                <div className="text-right">
                    <span style={{width: 17, cursor: 'pointer'}} data-toggle="modal" data-target="#modelId">
                        <i className="fa-solid fa-cart-shopping"></i> ({this.tinhTongSoLuong()}) Giỏ hàng
                    </span>
                </div>
                <CartModal xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}></CartModal>
                <ProductListEXC themGioHang = {this.themGioHang}></ProductListEXC>
            </div>
        );
    }
}

export default ExerciseCart;