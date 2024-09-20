import React, { Component } from 'react';
import { ModelContext } from '../_Context/ModelContext';

class LikeProfile extends Component {
    render() {
        return (
            <ModelContext.Consumer>
                {(value) => {
                    return <div>
                                <div className="card text-white bg-dark" style={{width:300}}>
                                    <div className="card-body">
                                        <button onClick={() => {
                                            value.setLike()
                                        }} style={{color: 'red', border: '1px solid red'}} className="card-title">Like <i className='fa fa-heart'></i></button>
                                    </div>
                                </div>
                            </div>
                }}
            </ModelContext.Consumer>

        );
    }
}

export default LikeProfile;