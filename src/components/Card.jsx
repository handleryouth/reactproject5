import { v4 as uuidv4 } from 'uuid';
import Keytag from "./Keytag";

function Card(props) {
  // keytag is the name of the tags for filter
  const keytag = props.keytag;
  return (
    <div className="card-container">
      <div className="left-card-section">
        <div>
          <img className="company-image" src={props.Image} alt="Logo" />
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
            <Keytag key={uuidv4()} keytag={keytag}/>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
