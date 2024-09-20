import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    //thuộc tính this.props.item lấy từ component productListComponent
    let { item } = this.props;

    return (
      <div className="card text-left">
        <img className="card-img-top" src={item.img} alt={item.img} />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.xemChiTiet(item)
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
