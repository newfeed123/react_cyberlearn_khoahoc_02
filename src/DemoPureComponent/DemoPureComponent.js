import React, { Component } from 'react';
import Profile from './Profile';

class DemoPureComponent extends Component {

    state = {
        like: {soLuong: 0}
    }

    likeImage = () => {
        let like_crr = this.state.like
        like_crr.soLuong += 1
        this.setState({
            like: like_crr
        })
    }

    render() {
        return (
            <div className='container'>

                <h3 className='text-center'>Profile Sett</h3>
                <Profile like = {this.state.like}></Profile>
                <br />
                <div className="card text-white bg-default">
                    <h3 style={{color: 'pink'}}>Số lượt thả tim ({this.state.like})</h3>
                    <div className="card-body">
                        <button style={{color: 'red'}} className='btn' onClick={() => {
                            this.likeImage()
                        }}>Thả tim <i className='fa fa-heart'></i></button>
                    </div>
                </div>

            </div>
        );
    }
}

export default DemoPureComponent;