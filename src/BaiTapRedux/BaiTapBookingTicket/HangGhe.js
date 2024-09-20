import React, { Component } from 'react';
import {connect} from 'react-redux'
import { datGheAction } from '../../redux/action/BaiTapDatVeAction';
class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = ''
            let disabled = false
            //Trạng thái ghế đã bị người khác đặt
            if(ghe.daDat){
                cssGheDaDat = 'gheDuocChon'
                disabled = true
            }

            //Xét trạng thái ghế đang đặt
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if(indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`${cssGheDangDat} ${cssGheDaDat} ghe`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe === 0){
            return <div className='ml-4'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }
        else{
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>

        }
    }

    render() {
        return (
            <div>
                <div style={{fontSize: 30}} className='text-light text-left ml-3 mt-3'>
                    {this.renderHangGhe()}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);