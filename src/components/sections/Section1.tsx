import {
  motion,
  motionValue,
  transform,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  Variants,
} from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import { section1State, windowHeightState, windowWidthState } from "../../atom";
import { ISectionProps, ISticky } from "./interfaces";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { CasperWhite } from "../CasperBlack";

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

const Canvas = styled(motion.canvas)``;

const CavasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

function Section1({ scrollY }: ISectionProps) {
  const windowWidth = useRecoilValue(windowWidthState);
  const windowHeight = useRecoilValue(windowHeightState);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext("2d");
  const [canvasRatio, setCanvasRatio] = useState(1);
  const [info, setInfo] = useRecoilState(section1State);
  const scrollRatio = useTransform(
    scrollY,
    [66, info.scrollHeight + 66],
    [0, 1]
  );

  // animation values
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
  const imgIdx = useTransform(scrollRatio, [0, 1], [0, 906]);

  // Load images
  const videoImages: Array<HTMLImageElement> = [];
  for (let i = 0; i < 907; i++) {
    const img = new Image();
    img.src = `hacking-images/img-${i + 1}.jpg`;
    videoImages.push(img);
  }
  // scale canvas
  useEffect(() => {
    if (canvasRef.current) {
      const widthRatio = windowWidth / canvasRef.current?.width;
      const heightRatio = windowHeight / canvasRef.current?.height;
      const ratio = widthRatio < heightRatio ? heightRatio : widthRatio;
      setCanvasRatio(ratio);
    }
  }, [windowHeight, windowWidth]);

  // Draw images
  console.log("전", imgIdx.get());
  console.log("draw");
  context?.drawImage(videoImages[Math.round(imgIdx.get())], 0, 0);
  console.log("후", imgIdx.get());

  imgIdx.on("change", (idx) => {
    context?.drawImage(videoImages[Math.round(idx)], 0, 0);
  });
  const videoOpacity = useTransform(scrollRatio, [0.9, 1], [1, 0]);

  return (
    <Wrapper style={{ height: info.scrollHeight }}>
      <CasperWhite />
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
      <CavasWrapper>
        <Canvas
          style={{ scale: canvasRatio, opacity: videoOpacity }}
          ref={canvasRef}
          width={4096}
          height={2160}
        ></Canvas>
      </CavasWrapper>
    </Wrapper>
  );
}

export default Section1;
