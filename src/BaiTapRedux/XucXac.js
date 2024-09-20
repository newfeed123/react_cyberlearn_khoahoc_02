import React, { Component } from 'react';
import { connect } from 'react-redux'
class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} src={xucXac.hinhAnh} className='ml-2' style={{width: 55, height: 55}} alt='123'></img>
        })
    }

    render() {
        return (
            <div>
                {this.renderXucXac()}
            </div>
        );
    }
}

//hàm lấy state từ redux về biến đổi thành props của component
const mapStateToProps = state => {
    return {
        mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac);