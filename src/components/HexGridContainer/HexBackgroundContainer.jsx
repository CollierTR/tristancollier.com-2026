import PropTypes from "prop-types";
const hexPattern = "/textures/grid.svg";
const texture = "/textures/real-carbon-fibre.png";

function HexBackgroundContainer({
  children,
  width = "w-full",
  height = "min-h-screen",
  hexSize = "700px",
  hexBrightness = "100%",
  bgColor = "black",
  lightInside = "green",
  lightOutside = "white",
  textureOverlay = true,
  mouseEffect = true,
  pulse = true,
}) {
  function moveLight(event) {
    if (mouseEffect) {
      const light = document.getElementById("light");
      light.style.display = "block";
      light.style.left = `${event.clientX}px`;
      light.style.top = `${event.clientY}px`;
    }
  }

  function mouseExit() {
    if (mouseEffect) {
      const light = document.getElementById("light");
      light.style.display = "none";
    }
  }

  return (
    <div
      onMouseMove={moveLight}
      onMouseLeave={mouseExit}
      className={`${width} ${height} relative overflow-hidden m-0 p-0`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        id="hex-grid"
        className="absolute top-0 left-0 z-20 w-full h-full m-0 p-0"
        style={{
          backgroundSize: hexSize,
          backgroundImage: "url(" + hexPattern + ")",
          filter: "brightness(" + hexBrightness + ")",
        }}
      ></div>

      {textureOverlay && (
        <div
          id="texture"
          className="w-full h-full absolute z-30 top-0 left-0 m-0 p-0 hidden sm:block"
          style={{
            backgroundImage: "url(" + texture + ")",
            backgroundSize: "20px",
          }}
        ></div>
      )}

      <div
        id="light"
        className={`absolute ${pulse && "animate-[pulse_3.5s_ease-in-out_infinite]"} hidden rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[25vw] blur-[20px] z-0`}
        style={{
          backgroundImage: `radial-gradient(${lightInside} 40%, ${lightOutside})`,
        }}
      ></div>

      <div className="h-full w-full absolute z-50">{children}</div>
    </div>
  );
}

HexBackgroundContainer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  hexSize: PropTypes.string,
  hexBrightness: PropTypes.string,
  bgColor: PropTypes.string,
  lightInside: PropTypes.string,
  lightOutside: PropTypes.string,
  mouseEffect: PropTypes.bool,
  textureOverlay: PropTypes.bool,
  pulse: PropTypes.bool,
};

export default HexBackgroundContainer;
