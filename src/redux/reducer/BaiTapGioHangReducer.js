
//setup state giỏ hàng trên store
const stateGioHang = {
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {

    switch (action.type) {
        case 'THEM_GIO_HANG':{
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.spGioHang.maSP)
            if(index !== -1){
                state.gioHang[index].soLuong += 1
            }
            else{
                state.gioHang.push(action.spGioHang)
            }

            //setState trong redux
            //cập nhật lại state
            state.gioHang = [...state.gioHang]

            return {...state}
        }
        case 'XOA_GIO_HANG':{
            let gioHangCapNhat = [...state.gioHang]
            //tim ra sp can xoa dua vao ma san pham
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if(index !== -1){
                gioHangCapNhat.splice(index, 1)
            }

            //cập nhật lại sate 
            state.gioHang = gioHangCapNhat
            return {...state}
        }
        case 'TANG_GIAM_SO_LUONG':{
            let gioHangCapNhat = [...state.gioHang] //tạo mảng mới sao chép nội dung từ state

            //xu ly tăng giảm trên gioHangCapNhat
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
            if(index !== -1){
                if(action.tangGiam)
                    gioHangCapNhat[index].soLuong += 1
                else{
                    if(gioHangCapNhat[index].soLuong > 0)
                        gioHangCapNhat[index].soLuong -= 1
                    else
                        alert('số lượng tối thiểu là 1')
                }
            }

            //sau khi xử lý tăng giảm xong, thì gán lại vào state.gioHang
            state.gioHang = gioHangCapNhat

            return {...state}
        }
    
        default:
            break;  
    }

    return {...state}
}

export default BaiTapGioHangReducer