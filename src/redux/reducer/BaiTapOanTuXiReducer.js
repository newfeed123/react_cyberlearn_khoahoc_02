const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false},
    ],
    ketQua: 'i love you 3000',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png'},
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch(action.type){

        case 'CHON_KEO_BUA_BAO':{
            // console.log(action);
            let mangCuocUpdate = [...state.mangDatCuoc]

            //biến đổi hết về false
            //map: mỗi lần sẽ trả về obj cũ nhưng thay đổi giá trị biến datCuoc
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if(item.ma === action.maCuoc)
                    return {...item, datCuoc: true} //es6
                return {...item, datCuoc: false} //es6
            })
            state.mangDatCuoc = mangCuocUpdate
            return {...state}

        }

        case 'RANDOM':{
            // console.log('RANDOM', action);
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            state.computer = quanCuocNgauNhien
            return {...state}
        }

        case 'END_GAME':{
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computer = state.computer
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo'){
                        state.ketQua = 'hòa nhau !'
                    } else if(computer.ma === 'bua'){
                        state.ketQua = 'thua sml !'
                    } else {
                        state.ketQua = 'thắng rồi !'
                        state.soBanThang += 1
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo'){
                        state.ketQua = 'thắng rồi !'
                        state.soBanThang += 1
                    } else if(computer.ma === 'bua'){
                        state.ketQua = 'hòa nhau !'
                    } else {
                        state.ketQua = 'thua sml !'
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo'){
                        state.ketQua = 'thua sml !'
                    } else if(computer.ma === 'bua'){
                        state.ketQua = 'thắng rồi !'
                        state.soBanThang += 1
                    } else {
                        state.ketQua = 'hòa nhau !'
                    }
                    break;
            
                default:
                    break;
            }
            state.soBanChoi += 1

            return {...state}
        }

        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer