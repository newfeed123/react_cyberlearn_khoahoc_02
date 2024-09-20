import React, { Component } from 'react';
import { ExModelListContext } from '../_Context/ExModelListContext';

class ModelItem extends Component {
    render() {
        let {modelItem} = this.props
        return (
            <ExModelListContext.Consumer>
                {(value) => {
                    return <div>
                                <div className="card text-left" style={{width: 300}}>
                                    <img className="card-img-top" src={modelItem.img} alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">Họ tên: {modelItem.name}</h4>
                                        <p className="card-text">Tuổi: {modelItem.age}</p>
                                        <button onClick={() => {
                                            value.setActiveModel(modelItem.id)
                                        }} style={{borderRadius: '5px', background: 'none', border: '1px solid red'}} className="card-text">{modelItem.like}  <i className='fa fa-heart text-danger'></i></button>
                                    </div>
                                </div>
                            </div>
                }}
            </ExModelListContext.Consumer>
        );
    }
}

export default ModelItem;