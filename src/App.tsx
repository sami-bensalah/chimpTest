import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./Components/Game";
import Banner from "./Components/Banner";

function App() {
  // displays the game scene. lvl is used to calculate the number of buttons to display
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#e8e8e8",
      }}
    >
      <Banner />
      <Game id="game" lvl={0} />
    </div>
  );
}

export default App;
