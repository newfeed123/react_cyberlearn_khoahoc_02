import React, { Component } from 'react';
import './BaiTapOanTuXi.css'
import Player from './Player';
import Computer from './Computer';
import KetQuaTroChoi from './KetQuaTroChoi';
import { connect } from 'react-redux';
class BaiTapOanTuXi extends Component {
    render() {

        let keyframe = `@keyframes randomItem${Date.now()} {
                from {top: 0px;}
                to {top: 200px;}
            }`

        return (
            <div className='gameOanTuXi'>
                <div className="row text-center mt-3">
                    <div className="col-4">
                        <Player></Player>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi></KetQuaTroChoi>
                        <button 
                            className='btn btn-success p-2 mt-3 display-4'
                            onClick={() => {
                                this.props.playGame()
                            }}
                        >
                            Chơi luôn
                        </button>
                    </div>
                    <div className="col-4">
                        <Computer></Computer>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0
            //khai baos ham lap di lap lai
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count++
                if(count > 10){
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'END_GAME',
                        
                    })
                }
            }, 100)

        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);