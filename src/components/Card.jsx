import React, { useContext } from "react";
import { filterContext } from "../contexts/filtercontext";

function Card(props) {
  const { items, setItems } = useContext(filterContext);


  function filtering(event) {
    let eventitem = event.target.textContent;
    setItems((prevState) => {
      const flag = items.findIndex((i) => i === eventitem);
      if (flag === -1) {
        return [...prevState, eventitem];
      } else {
        return [...prevState];
      }
    });
  }

  const keytag = props.keytag;
  return (
    <div className="card-container">
      <div className="left-card-section">
        <div>
          <img className="company-image" src={props.image} alt="Logo" />
        </div>

        <div>
          <div className="card-branding">
            <p className="company-name">{props.company}</p>
            {props.condition ? (
              <p className="condition">{props.condition}</p>
            ) : null}
            {props.featured ? (
              <p className="featured">{props.featured}</p>
            ) : null}
          </div>

          <p className="role">{props.role}</p>
          <div className="card-detail">
            <p className="border">{props.timeposted}</p>
            <p className="border">{props.hoursofwork}</p>
            <p>{props.region}</p>
          </div>
        </div>
      </div>

      <div className="right-card-section">
        {keytag.map((keytag) => {
          return (
            <button className="keytag" onClick={filtering}>
              {keytag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
