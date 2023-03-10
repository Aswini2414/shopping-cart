import React from "react";

const DiscountTable = () => {
  return (
    <>
      <section>
        <table className="table">
          <caption className="caption">Discount Table</caption>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Trade A</th>
              <th>Trade B</th>
              <th>Trade C</th>
              <th>Trade D</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vendor1</td>
              <td>29</td>
              <td>25</td>
              <td>N/A</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Vendor2</td>
              <td>N/A</td>
              <td>25</td>
              <td>0</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Vendor3</td>
              <td>12</td>
              <td>N/A</td>
              <td>3</td>
              <td>56</td>
            </tr>
            <tr>
              <td>Vendor4</td>
              <td>N/A</td>
              <td>0</td>
              <td>34</td>
              <td>12</td>
            </tr>
            <tr class="last_row">
              <td>Vendor5</td>
              <td>0</td>
              <td>15</td>
              <td>N/A</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default DiscountTable;
