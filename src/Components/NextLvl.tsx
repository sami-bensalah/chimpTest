import "../myCSS.css";
import Grid from "./Grid";
import { createRoot } from "react-dom/client";
import LevelText from "./LevelText";
interface Props {
  lvl: number;
}
function NextLvl({ lvl }: Props) {
  const container = document.getElementById("game");
  const handleClick = () => {
    if (container) {
      //loads the next level

      const root = createRoot(container);
      root.render(
        <>
          <LevelText level={lvl.toString()} />
          <Grid id="grid" currentLvl={lvl} />
        </>
      );
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        bottom: "50%",
      }}
      className="d-flex justify-content-center"
    >
      <button onClick={handleClick} className=" btn btn-info endButton">
        Next Level
      </button>
    </div>
  );
}

export default NextLvl;
