import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HUY_GHE } from '../../redux/types/BaiTapDatVeType';
import { huyGheAction } from '../../redux/action/BaiTapDatVeAction';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button> <span style={{fontSize: '25px'}} className='text-light'> Ghế đã đặt</span> <br />
                    <button className='gheDangChon'></button> <span style={{fontSize: '25px'}} className='text-light'> Ghế đang đặt</span> <br />
                    <button style={{marginLeft: 0}} className='ghe'></button> <span style={{fontSize: '25px'}} className='text-light'> Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border="2">
                        <thead>
                            <tr style={{fontSize: '25px'}} className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className='text-warning'>

                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button onClick={() => {this.props.dispatch(huyGheAction(gheDangDat.soGhe))}}>Hủy</button></td>
                                </tr>
                            })}

                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia 
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>    
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

export default connect(mapStateToProps)(ThongTinDatGhe);
