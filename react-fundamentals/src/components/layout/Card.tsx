import "./Card.css";

const Card = (props: any) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.color,
        border: `4px solid ${props.color} `
      }}
    >
      <div className="title">
        <h2>{props.titulo}</h2>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Card;
