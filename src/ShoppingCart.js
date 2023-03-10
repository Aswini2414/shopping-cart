import React, { useState, useEffect } from "react";
import { data } from "./data";

const ShoppingCart = ({ list, removecart }) => {
  const [cart, setCart] = useState([]);
  console.log(list);
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    const product = data[list[i] - 1];
    const Dis_price = product.price - (product.price * product.discount) / 100;
    sum = sum + Dis_price;
    console.log(sum);
  }

  return (
    <>
      <section>
        <table className="table">
          <caption className="caption">Shopping Cart</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Org Price</th>
              <th>DiscountPercentage</th>
              <th>Discounted Price</th>
              <th>Vendor</th>
              <th>Remove Cart</th>
            </tr>
          </thead>
          <tbody>
            {list.map((num, index) => {
              const product = data[Number(num - 1)];
              const { id, name, price, tags, vendor, discount } = product;
              const Dis_price = price - (price * discount) / 100;
              let sum = 0;
              sum = sum + Dis_price;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{discount}</td>
                  <td>{Dis_price}</td>
                  <td>{vendor}</td>
                  <button
                    id={id}
                    className="btn"
                    onClick={() => removecart(index)}
                  >
                    <td className="cart">Remove Cart</td>
                  </button>
                </tr>
              );
            })}
          </tbody>
          <caption className="cap">Total Price: Rs. {sum}</caption>
        </table>
      </section>
    </>
  );
};

export default ShoppingCart;
