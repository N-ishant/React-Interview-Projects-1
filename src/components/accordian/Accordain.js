// // Single Selection Accordain
// import React, { useState } from "react";
// import data from "./data";
// import "./Accordain.css";

// const Accordain = () => {
//   const [selected, setSelected] = useState(null);

//   const handleSingleSelection = (getCurrentId) => {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   };

//   console.log(selected);
//   return (
//     <div className="wrapper">
//       <div className="accordain">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => {
//             return (
//               <div className="item">
//                 <div
//                   onClick={() => handleSingleSelection(dataItem.id)}
//                   className="title"
//                 >
//                   <h3>{dataItem.question}</h3>
//                   <span>+</span>
//                 </div>
//                 {selected === dataItem.id ? (
//                   <div className="content">{dataItem.answer}</div>
//                 ) : null}
//               </div>
//             );
//           })
//         ) : (
//           <div>No data Found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Accordain;

// Multiple Selection Accordain
import React, { useState } from "react";
import data from "./data";
import "./Accordain.css";

const Accordain = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordain">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
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