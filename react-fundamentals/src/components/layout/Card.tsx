import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="title">
        <h2>{props.titulo}</h2>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
