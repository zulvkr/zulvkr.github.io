import Lottie from "lottie-react";
import Gradient from "./AnimatedGradient.json";
import Cat from "./14592-loader-cat.json"

const AnimatedBackground = () => <Lottie animationData={Gradient} loop={true}
 style={
  {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  }
 }
/>;

export default AnimatedBackground;

