import React, { useState } from "react";

const Card = ({ title, date, quartet, element, birthstones, desc, image }) => {
  const [Showcard, setShowcard] = useState(true);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a
          href="https://onedio.com/haber/burclarin-ogrenince-cok-sasiracaginiz-daha-once-hic-duyulmamis-ozellikleri-950002"
          className="card-link"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
