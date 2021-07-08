import React, { useContext } from "react";
import { filterContext } from "../contexts/filtercontext";

function Filter() {
  const { items, setItems } = useContext(filterContext);

  function Removeitem(e) {
    let button = e.target.parentNode;
    let parentDiv = button.parentNode.textContent;

    let result = items.filter((i) => i.name !== parentDiv);
    setItems(result);
  }

  function RemoveAll() {
    setItems([]);
  }

  return (
    <div
      style={items.length !== 0 ? { padding: "0.5vw" } : null}
      className="filter-container "
    >
      <div className="item-container">
        {items.map((item) => {
          return (
            <div className="filter-item">
              <div>
                <p>{item}</p>
              </div>
              <div onClick={Removeitem} className="cross-container">
                <img
                  className="cross-image"
                  src="/images/icon-remove.svg"
                  alt="Remove button"
                />
              </div>
            </div>
          );
        })}
      </div>
      {items.length !== 0 ? (
        <div className="clear-container">
          <p className="clear" onClick={RemoveAll}>
            clear
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Filter;
