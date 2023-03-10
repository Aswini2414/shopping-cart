import React, { useState, useEffect } from "react";
import { data } from "./data.js";
import ShoppingCart from "./ShoppingCart";

const Product = () => {
  const [productId, setProductId] = useState();
  const [list, setList] = useState([]);

  const click = (e) => {
    //setProductId(e.currentTarget.id);
    const newList = [...list, e.currentTarget.id];
    setList(newList);
    //console.log(e.currentTarget.id);
  };
  const removecart = (indexvalue) => {
    const newList = list.filter((id, index) => index !== indexvalue);
    setList(newList);
  };
  return (
    <>
      <section>
        <table className="table">
          <caption className="caption">Product Table</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Tags</th>
              <th>Vendor</th>
              <th>Cart</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => {
              const { id, name, price, tags, vendor, discount } = product;
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{tags.join()}</td>
                  <td>{vendor}</td>
                  <button id={id} className="btn" onClick={click}>
                    <td className="cart">Add to Cart</td>
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <ShoppingCart list={list} removecart={removecart} />
    </>
  );
};

export default Product;
