import React, { Component } from 'react';
import './BaiTapGameXucXac.css'
import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';
import { connect } from 'react-redux';

class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='game' style={{}}>
                <div className='title-game text-center mt-5 mb-5 display-4'>
                    Bài tập Game Tài Xỉu
                </div>

                <div className="row">
                    <div className="col-5 text-center">
                        <button onClick={() => {
                            this.props.datCuoc(true)
                        }} className='btnGame'>TÀI</button>
                    </div>
                    <div className="col-2">
                        <XucXac></XucXac>
                    </div>
                    <div className="col-5 text-center">
                        <button onClick={() => {
                            this.props.datCuoc(false)
                        }} className='btnGame'>XỈU</button>
                    </div>
                </div>
                <div className="text-center thongTinTroChoi">
                    <ThongTinTroChoi></ThongTinTroChoi>
                    <button onClick={() => {
                        this.props.playGame()
                    }} className='btn btn-success mt-5 p-3 display-4'>Chơi luôn</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu,
            }
            dispatch(action)
        },
        playGame: () => {
            
            dispatch({
                type: "PLAY_GAME"
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);