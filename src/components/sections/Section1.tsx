import {
  motion,
  motionValue,
  transform,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Variants,
} from "framer-motion";
import { useRecoilState } from "recoil";
import { section1State } from "../../atom";
import { ISectionProps, ISticky } from "./interfaces";
import styled from "styled-components";
import { useEffect } from "react";

const Wrapper = styled.div`
  padding-top: 30vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled(motion.div)<ISticky>`
  position: fixed;
  opacity: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  font-size: 4rem;
  font-weight: bold;
`;

const logoVars: Variants = {
  initial: {
    fill: "rgba(0,0,0,0)",
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
  },
  animate: {
    fill: "rgba(0,0,0,1)",
    strokeDasharray: 1400,
    transition: {
      default: { duration: 2 },
      fill: { duration: 1, delay: 1.5 },
    },
  },
};

function Casper() {
  return (
    <svg
      width="800"
      height="327"
      viewBox="0 0 1588 327"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={logoVars}
        initial="initial"
        animate="animate"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1090 0H1310V30H1090V110H1310V140H1090V220H1310V250H1090H1060V220V140V110V30V0H1090ZM250 0.00012207H30H0V30.0001V220V250H30H250V220H30V30.0001H250V0.00012207ZM265 250V140V110V30.0001V0.00012207H295H485H515V30.0001V110V140V250H485V140H295V250H265ZM485 110H295V30.0001H485V110ZM560 0.00012207H780V30.0001H560V110H780V125V140V220V250H750H530V220H750V140H530V125V110V30.0001V0.00012207H560ZM1355 0H1575V7V30V110V132V140H1485.27L1587.65 242.738L1566.4 263.914L1443 140.08L1443.08 140H1355V250H1325V140V110V30V0H1355ZM1355 30H1545V110H1355V30ZM800.5 0.449951C796.082 0.449951 792.5 4.03167 792.5 8.44995V242.45C792.5 246.756 795.902 250.267 800.164 250.443L820.5 326.45L840.834 250.45H1034.5C1038.92 250.45 1042.5 246.868 1042.5 242.45V8.44995C1042.5 4.03167 1038.92 0.449951 1034.5 0.449951H800.5ZM942 100.95C942 107.854 936.404 113.45 929.5 113.45C922.596 113.45 917 107.854 917 100.95C917 94.0464 922.596 88.45 929.5 88.45C936.404 88.45 942 94.0464 942 100.95ZM993.5 113.45C1000.4 113.45 1006 107.854 1006 100.95C1006 94.0464 1000.4 88.45 993.5 88.45C986.596 88.45 981 94.0464 981 100.95C981 107.854 986.596 113.45 993.5 113.45ZM961.5 120.45L975 148.45H948L961.5 120.45Z"
        fill="black"
        pathLength={2000}
        stroke="black"
      />
    </svg>
  );
}

function Section1({ scrollY }: ISectionProps) {
  const [info, setInfo] = useRecoilState(section1State);
  const scrollRatio = useTransform(
    scrollY,
    [66, info.scrollHeight + 66],
    [0, 1]
  );

  const opacity1 = useTransform(
    scrollRatio,
    [0.1, 0.2, 0.25, 0.3],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollRatio,
    [0.3, 0.4, 0.45, 0.5],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollRatio,
    [0.5, 0.6, 0.65, 0.7],
    [0, 1, 1, 0]
  );
  const y1 = useTransform(
    scrollRatio,
    [0.1, 0.2, 0.25, 0.3],
    [100, 0, 0, -100]
  );
  const y2 = useTransform(
    scrollRatio,
    [0.3, 0.4, 0.45, 0.5],
    [100, 0, 0, -100]
  );
  const y3 = useTransform(
    scrollRatio,
    [0.5, 0.6, 0.65, 0.7],
    [100, 0, 0, -100]
  );

  return (
    <Wrapper style={{ height: info.scrollHeight }}>
      <Casper />
      <H2 sticky="true" style={{ opacity: opacity1, y: y1 }}>
        Hacking
      </H2>
      <H2 sticky="true" style={{ opacity: opacity2, y: y2 }}>
        {" "}
        Programming
      </H2>
      <H2 sticky="true" style={{ opacity: opacity3, y: y3 }}>
        Secruity
      </H2>
      <span></span>
    </Wrapper>
  );
}

export default Section1;
