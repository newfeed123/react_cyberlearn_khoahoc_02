import React, { Component, PureComponent } from 'react';

class Profile extends PureComponent {
    render() {
        return (
            <div className="card text-white bg-dark" style={{width: 250}}>
                <img style={{width: 250, height: 250}} className="card-img-top" src="https://ggmeo.com/images/dtcl/sett-dtcl.jpg" alt />
                <div className="card-body">
                    <h3 style={{color: 'pink'}}>Số lượt thả tim ({this.props.like})</h3>
                    <h4 className="card-title">Họ tên : Trần Văn Sett</h4>
                    <p className="card-text">Tuổi: 18</p>
                </div>
            </div>

        );
    }
}

export default Profile;