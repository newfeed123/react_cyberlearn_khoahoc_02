import React, { Component } from 'react';
import { ModelContext } from '../_Context/ModelContext';

class ModelProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div className='mt-5'>
                                <h3>Profile</h3>
                                <div style={{width: 300}} className="card text-left">

                                        
                                    <img className="card-img-top" src="https://cdn.mobalytics.gg/assets/lol/images/dd/champions/backgrounds/jarvaniv.jpg?V3" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Tên: Jarvan4</h4>
                                        <p className="card-text">Tuổi: 180</p>
                                        <span style={{color:'red'}}> {value.stateLike} <i className='fa fa-heart'></i></span>
                                    </div>

                                </div>
                            </div>
                }}

            </ModelContext.Consumer>

        );
    }
}

export default ModelProfile;