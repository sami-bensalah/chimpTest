import { useState } from "react";
import "../myCSS.css";
import End from "./End";
import { createRoot } from "react-dom/client";
import NextLvl from "./NextLvl";
interface Props {
  id: string;
  totalButtons: number;
}

function Button({ id, totalButtons }: Props) {
  const [clicked, setClicked] = useState(false);
  // sets clicked to true so that the event can be handled
  const handleClick = () => {
    // puts all active buttons on screen into list
    const buttonArr = document.getElementsByClassName("btn buttonColor");
    // calculates the id of the next button to be clicked
    const currentPointer = totalButtons - buttonArr.length + 1;

    const container = document.getElementById("game");
    // checks if the button id is equal to the button to be clicked
    if (id == currentPointer.toString()) {
      // hides all button values once first button is pressed
      if (id == "1") {
        const activeButtons =
          document.getElementsByClassName("btn buttonColor");
        for (let i = 1; i < activeButtons.length + 1; i++) {
          const b = document.getElementById(i.toString());
          b!.style.color = "black";
          b!.style.backgroundColor = "black";
        }
      }
      //checks if the button being pressed is the final button left on the screen
      if (id == totalButtons.toString()) {
        if (container) {
          // replaces the grid scene with the next level screen
          const root = createRoot(container);
          // finds next level
          const nextLvl = totalButtons - 3;
          root.render(<NextLvl lvl={nextLvl} />);
        }
      }
      setClicked(true);
      // enters statement if the incorrect button is pressed
    } else {
      if (container) {
        // replaces the grid scene with the end screen
        const root = createRoot(container);
        root.render(<End />);
      }
    }
  };
  // switched button color on click
  const toggleClass = clicked ? "btn-light" : "buttonColor";
  // disables the button on click
  const toggleDisabled = clicked ? true : false;
  // removes text from screen on click
  const setText = clicked ? null : id;
  // returns the button element with the necessary styling along with assigning relevant event handlers
  return (
    <div style={{ padding: "5px" }}>
      <button
        id={id}
        style={{ width: "100px", height: "100px" }}
        type="button"
        className={"btn " + toggleClass}
        onClick={handleClick}
        disabled={toggleDisabled}
      >
        {setText}
      </button>
    </div>
  );
}

export default Button;
