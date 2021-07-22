import { useContext } from "react";
import { filterContext } from "./App";

export default function FilterItem({item}) {
    const { items, setItems } = useContext(filterContext);

    function DeleteKeytag(choosed) {
        setItems(items.filter((i) => i !== choosed));
      }


  return (
      <div className="filter-container__keytag-item">
        <h3>{item}</h3>
        <button value={item} onClick={(e) => DeleteKeytag(e.target.value)}>
          &times;
        </button>
      </div>
      );
}
