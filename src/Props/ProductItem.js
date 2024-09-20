import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div>
                <div className="card text-left" style={{width: "250px"}}>
                    <img className="card-img-top" src={this.props.dataProductItem.image} alt={this.props.dataProductItem.image} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.dataProductItem.name}</h4>
                        <p className="card-text">{this.props.dataProductItem.price}</p>
                        <button type="button" className="btn btn-dark"><i className="fa fa-cart-arrow-down"></i> Xem chi tiết</button>                            </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;