import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {

    renderProductItem = () => {
        return this.props.arrProduct.map((item, index) => {
            return <div className='col-4 mt-3 w3-animate-zoom'  key={index}>
                        <ProductItem dataProductItem={item}></ProductItem>
                    </div>

        })
    }

    render() {
        console.log(this.props.arrProduct)

        return (
            <div className='row'>
                {this.renderProductItem()}
            </div>
        );
    }
}

export default ProductList;