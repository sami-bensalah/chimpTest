import chimp from "./chimp.png";
function Banner() {
  return (
    <div
      style={{
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderBottomColor: "#c0c0c0",
        fontSize: "30px",
        fontFamily: "Lucida Console",
        textAlign: "center",
        height: "10%",
        backgroundColor: "white",
      }}
    >
      Chimp Test
      <img src={chimp} alt="chimp" height={"100%"} />
    </div>
  );
}

export default Banner;
