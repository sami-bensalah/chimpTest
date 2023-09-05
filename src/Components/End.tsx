import "../myCSS.css";
import Grid from "./Grid";
import { createRoot } from "react-dom/client";
import LevelText from "./LevelText";

function End() {
  const container = document.getElementById("game");
  const handleClick = () => {
    if (container) {
      const root = createRoot(container);
      root.render(
        <>
          <LevelText level={"0"} />
          <Grid id="grid" currentLvl={0} />
        </>
      );
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: "40%",
        width: "100%",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "30px",
          paddingBottom: "2%",
        }}
      >
        You Chose Incorrectly
      </p>

      <div className="d-flex justify-content-center">
        <button
          onClick={handleClick}
          style={{ width: "100px", height: "50px" }}
          type="button"
          className="btn btn-secondary "
        >
          retry
        </button>
      </div>
    </div>
  );
}

export default End;
