import React, { Component } from 'react';

class Child extends Component {

    renderSize = () => {
        let {sizes} = this.props.productItem
        return sizes.map((number, index) => {
            return <button key = {index}>{number}</button>
        })
    }

    render() {

        let {src, name, price, desc} = this.props.productItem
        let {shoesSize} = this.props
        return (
            <div>
                child
                <img style={{width: 150}} src={src} alt="" />
                <div className="card text-left">
                    <img style={{width: 250}} className="card-img-top" src={src} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                        {this.renderSize()}

                        {shoesSize.map((number, index) => {
                            return <button key = {index}>{number}</button>
                        })}

                        <button onClick={() => {
                            this.props.showAlert(desc)
                        }}>Detail</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Child;