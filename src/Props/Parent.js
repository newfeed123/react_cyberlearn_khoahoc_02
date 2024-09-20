import React, { Component } from "react";
import Child from "./Child";
import ChildFunctional from "./ChildFunctional";

class Parent extends Component {
//   src =
//     "https://images.unsplash.com/photo-1716798781407-1c1767955e2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//   name = "ảnh truyền từ Parent";

  product = {
    id: 1,
    name: "bitis hunter x2",
    src: "https://picsum.photos/200/300",
    desc: "Giày việt nam",
    sizes: [36, 37, 38, 39]
  };

  size_arr = [36, 37, 38, 39]

  showInfo = (name) => {
    alert(name)
  }

  render() {
    return (
      <div>
        <input type="text" />
        {/* <Child propSrc={this.src} name={this.name}></Child>
                <Child propSrc={this.src} name="huy"></Child> */}
        {/* <ChildFunctional propSrc={this.src} name={this.name}></ChildFunctional> */}
        {/* <ChildFunctional productItem={this.product}></ChildFunctional> */}
        <Child showAlert={this.showInfo} productItem={this.product} shoesSize={this.size_arr}></Child>
      </div>
    );
  }
}

export default Parent;
