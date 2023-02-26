import { motion, MotionValue } from "framer-motion";
import styled from "styled-components";

interface IndicatorProps {
  scrollYProgress: MotionValue<number>;
}

const Svg = styled.svg`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    right: 20px;
    bottom: 20px;
    scale: 0.8;
  }
`;
const Circle = styled(motion.circle)``;

function Indicator({ scrollYProgress }: IndicatorProps) {
  return (
    <Svg width="100" height="100" viewBox="0 0 100 100">
      <Circle
        cx="50"
        cy="50"
        r="25"
        fill={"none"}
        pathLength="1"
        stroke="rgba(0,0,0,0.2)"
        strokeWidth={10}
      />
      <Circle
        cx="50"
        cy="50"
        r="25"
        pathLength="1"
        fill={"rgba(1,1,1,0)"}
        stroke={"#0066cc"}
        strokeWidth={10}
        style={{ pathLength: scrollYProgress }}
      />
    </Svg>
  );
}

export default Indicator;
