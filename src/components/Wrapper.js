import "./Wrapper.css";
import React from "react";

function Warapper(props) {
  let background = {};
  if (props.images.length > 0) {
    background = {
      backgroundImage: `linear-gradient(142deg, rgba(178,201,199,0.26234243697478987) 0%, rgba(154,149,138,0.6068802521008403) 100%), url(${props.images[0].links.download})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      borderRadius: "4px",
      height: "auto",
      maxWidth: "100%",
    };

    return <div style={background}>{props.children}</div>;
  }
}
export default Warapper;
//Pink gradient
//(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))
