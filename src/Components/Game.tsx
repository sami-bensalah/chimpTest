import Grid from "./Grid";
import LevelText from "./LevelText";
interface Props {
  lvl: number;
  id: string;
}
function Game({ lvl, id }: Props) {
  return (
    <div id={id} className="d-flex align-items-center justify-content-center">
      <LevelText level={lvl.toString()} />
      <Grid id="grid" currentLvl={lvl} />
    </div>
  );
}

export default Game;
