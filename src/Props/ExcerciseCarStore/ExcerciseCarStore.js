import React, { Component } from 'react';
import Modal from './Modal';
import ProductList from './ProductList';

class ExcerciseCarStore extends Component {

    state = {
      productDetail: {
        id: 1,
        name: "Crystal Black",
        type: "Pearl",
        img: "./img/products/black-car.jpg",
        srcImg: "images-black/images-black-1/",
        color: "Black",
        price: "19,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
      }
    }

    products = [
      {
        id: 1,
        name: "Crystal Black",
        type: "Pearl",
        img: "./img/products/black-car.jpg",
        srcImg: "images-black/images-black-1/",
        color: "Black",
        price: "19,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
      },
      {
        id: 2,
        name: "Modern Steel",
        type: "Metallic",
        img: "./img/products/steel-car.jpg",
        srcImg: "images-steel/images-steel-1/",
        color: "Steel",
        price: "20,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
      },
      {
        id: 3,
        name: "Lunar Silver",
        type: "Metallic",
        img: "./img/products/silver-car.jpg",
        srcImg: "images-silver/images-silver-1/",
        color: "Silver",
        price: "21,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
      },
      {
        id: 4,
        name: "Rallye Red",
        type: "Metallic",
        img: "./img/products/red-car.jpg",
        srcImg: "images-red/images-red-1/",
        color: "Red",
        price: "22,550",
        engineType: "In-Line 4-Cylinder",
        displacement: "1996 cc",
        horsepower: "158 @ 6500 rpm",
        torque: "138 lb-ft @ 4200 rpm",
        redline: "6700 rpm",
      }
    ]

    xemChiTiet = (newProduct) => {
      this.setState({
        productDetail: newProduct
      })
    }

    render() {

        return (
            <div>
                <h3 className='display-4 text-center'>Danh sách xe</h3>
                <Modal content={this.state.productDetail}></Modal>
                <ProductList xemChiTiet={this.xemChiTiet} productsData={this.products}></ProductList>
            </div>
        );
    }
}

export default ExcerciseCarStore;