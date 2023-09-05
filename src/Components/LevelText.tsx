interface Props {
  level: string;
}

function LevelText({ level }: Props) {
  return (
    <div
      style={{
        fontFamily: "Lucida Console",
        fontSize: "30px",
        bottom: "89.5%",
        right: "90%",
        position: "absolute",
      }}
    >
      <p>Level: {level}</p>
    </div>
  );
}

export default LevelText;
