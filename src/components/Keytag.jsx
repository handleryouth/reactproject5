import { useContext } from "react";
import { filterContext } from "./App";

export default function Keytag({ keytag }) {
  const { items, setItems } = useContext(filterContext);
  function AddKeytag(choosed) {
    if (items.findIndex((item) => item === choosed) === -1) {
      setItems([...items, choosed]);
    }
  }

  return (
    <button
      onClick={(e) => AddKeytag(e.target.value)}
      value={keytag}
      className="keytag"
    >
      {keytag}
    </button>
  );
}
