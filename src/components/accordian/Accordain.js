// Single Selection Accordain
import React, { useState } from "react";
import data from "./data";
import './Accordain.css';

const Accordain = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getItemId) => {
    setSelected(getItemId === selected ? null : getItemId);
  };

  console.log(selected);
  return (
    <div className="wrapper">
      <div className="accordain">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </div>
  );
};

export default Accordain;