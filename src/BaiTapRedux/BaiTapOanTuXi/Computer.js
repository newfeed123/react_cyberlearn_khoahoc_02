import React, { Component } from 'react';
import { connect } from 'react-redux';
class Computer extends Component {
    render() {

        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0}
        }`

        return (
            <div className='text-center playerGame'>
                <style>
                    {keyframe}
                </style>
                <div className='theThink' style={{position: 'relative'}}>
                    <img 
                        className='mt-3' 
                        style={{
                            width: 100, 
                            height: 100, 
                            left: '15%',
                            transform: 'rotate(120deg)', 
                            animation:`randomItem${Date.now()} 0.5s`, 
                            position: 'absolute'
                        }} 
                        src={this.props.computer.hinhAnh} 
                        alt="" 
                    />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: 150, height: 150}} src="./img/gameOanTuXi/playerComputer.png" alt="123" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer);