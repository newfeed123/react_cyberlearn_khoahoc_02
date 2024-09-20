import React, { Component } from 'react';
import {connect} from 'react-redux'
class Player extends Component {



    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                
                    <img 
                        className='mt-3' style={{width: 100, height: 100, transform: 'rotate(120deg)'}} 
                        src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} 
                        alt="" 
                    />
                </div>
                <div className="speech-bubble"></div>
                <img style={{width: 150, height: 150}} src="./img/gameOanTuXi/player.png" alt="123" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        //thêm viền

                        let border = {}
                        if(item.datCuoc){
                            border = {border: '3px solid orange'}
                        }

                        return <div className="col-4" key={index}>
                                    <button onClick={() => {
                                        this.props.datCuoc(item.ma)
                                    }} style={border} className='btnItem'>
                                        <img style={{width: 50, height: 50}} src={item.hinhAnh} alt="" />
                                    </button>
                                </div>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);