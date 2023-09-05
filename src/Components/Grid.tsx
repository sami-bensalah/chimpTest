import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";
interface Props {
  currentLvl: number;
  id: string;
}

const Grid = ({ currentLvl, id }: Props) => {
  const requiredButtonCount: number = 4 + currentLvl;
  // will hold the positions of the buttons to be generated
  const coords: string[] = [];

  // populates the array with random, unqiue coordinates on the grid
  const getButtonPos = (arr: string[]) => {
    while (arr.length != requiredButtonCount) {
      const randRow = Math.floor(Math.random() * 5);
      const randCol = Math.floor(Math.random() * 9);
      if (arr.includes(randRow + "," + randCol)) {
        continue;
      }
      arr.push(randRow + "," + randCol);
    }
  };
  getButtonPos(coords);

  // array containing all button numbers
  const numbers: number[] = Array.from(
    { length: requiredButtonCount },
    (_, i) => i + 1
  );
  // takes random value to assign to button from the array
  // previously gave buttons display value by using an incrementing function, but resulted in each row on the screen being in numbered order
  const giveButtonVal = () => {
    const randIndex = Math.floor(Math.random() * numbers.length);
    const val = numbers[randIndex];
    numbers.splice(randIndex, 1);
    return val.toString();
  };

  // returns whether the space on the grid should be a button or an empty space
  const buttonOrDiv = (row: number, col: number) => {
    if (coords.includes(row + "," + col)) {
      return (
        <Button
          totalButtons={requiredButtonCount}
          id={giveButtonVal()}
        ></Button>
      );
    } else {
      return <div></div>;
    }
  };
  //9X5 grid
  const colArray = Array.from({ length: 9 }, (_, index) => index);
  const rowArray = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div id={id} className="container" style={{ paddingTop: "25px" }}>
      {rowArray.map((row) => (
        <div key={row} className="row row-cols-8 d-flex justify-content-center">
          {colArray.map((col) => (
            <div key={col} className="col-sm-1 ">
              {buttonOrDiv(row, col)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
