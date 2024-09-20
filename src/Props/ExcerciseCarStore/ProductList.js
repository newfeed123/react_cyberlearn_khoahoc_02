import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProductItem = () => {
        //this.props.productsData lấy từ ExcersiseCar component
        return this.props.productsData.map((product, index) => {
            return <div className='col-3' key={index}>
                <ProductItem xemChiTiet={this.props.xemChiTiet} item={product}></ProductItem>
            </div>
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.renderProductItem()}
                </div>
            </div>
        );
    }
}

export default ProductList;