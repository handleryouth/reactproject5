import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { filterContext } from "./App";
import FilterItem from "./FilterItem";

export default function FilterInput() {
  const { items, setItems } = useContext(filterContext);

  function ClearAll() {
    setItems([]);
  }

  return (
    <div className="filter-container">
      <div className="filter-container__keytag">
        {items.map((item) => {
          return <FilterItem key={uuidv4()} item={item} />;
        })}
      </div>

      <button onClick={ClearAll} className="filter-container__button">
        clear
      </button>
    </div>
  );
}
