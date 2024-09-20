import {combineReducers} from 'redux'
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer'
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer'
import BaiTapDatVeReducer from './BaiTapDatVeReducer'

//store tổng của ứng dụng, quản lý nhiều state
const rootReducer = combineReducers({
    sateGioHang: BaiTapGioHangReducer, //state giỏ hàng
    BaiTapGameXucXacReducer, //state BaiTapGame
    BaiTapOanTuXiReducer, //state BaiTapOanTuXi
    BaiTapDatVeReducer, //state BaiTapDatVe
})

export default rootReducer