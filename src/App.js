import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { horoscopes } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="card-container">
        {horoscopes.map((horoscopes, index) => {
          return (
            <div className="container">
              <Card key={index} {...horoscopes} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
