import React from "react";

export default function ChildFunctional(props) {

  let {src, name, price} = props.productItem

  return (
    <div>
      <div>
        child
        {/* <img style={{width: 150}} src={props.propSrc} alt="" /> */}
        {/* <div className="card text-left">
          <img
            style={{ width: 250 }}
            className="card-img-top"
            src={props.propSrc}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">Body</p>
          </div>
        </div> */}
        <div className="card text-left">
          <img
            style={{ width: 250 }}
            className="card-img-top"
            src={src}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
