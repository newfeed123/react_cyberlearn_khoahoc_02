import React, { Component, Fragment } from 'react';
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../../Data/danhSachGhe.json'
import HangGhe from './HangGhe';

class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}></HangGhe>
            </div>
        })
    }

    render() {
        return (
            <div className='bookingMovie' style={{position: '', width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
                <div style={{position: '', width: '100%', height: '100%', backgroundSize: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <div className="container">

                        <div className="row">
                            <div className="col-9 text-center">
                                <div className='text-warning display-4'>Đặt vé xem phim cyberlearn</div>
                                <div className='mt-5 text-light' style={{fontSize: '25px'}}>Màn hình</div>
                                <div className='mt-2' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <div className="screen"></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className="col-3">
                                <div className='text-light mt-2' style={{fontSize: '35px'}}>Danh sách ghế bạn chọn</div>
                                <ThongTinDatGhe></ThongTinDatGhe>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapBookingTicket;