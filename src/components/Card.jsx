import React, { useState } from "react";
import "./Card.css";

const Card = ({ title, date, quartet, element, birthstones, desc, image }) => {
  const [Showcard, setShowcard] = useState(false);
  return (
    <main>
      <div onClick={() => setShowcard(!Showcard)}>
        {Showcard ? (
          <div
            className="card"
            style={{ width: "18rem", background: "cadetblue" }}
          >
            <img src={image} alt="horoscopes" />
          </div>
        ) : (
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{date}</li>
                <li className="list-group-item">Characteristic : {quartet}</li>
                <li className="list-group-item">Zodiac Element : {element}</li>
                <li className="list-group-item">Birthstone: {birthstones}</li>
              </ul>
              <p className="card-text">{desc}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Card;
