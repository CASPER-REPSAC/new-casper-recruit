import { motion, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  section1State,
  section2State,
  section3State,
  windowHeightState,
  windowWidthState,
} from "../../atom";
import { ISectionProps } from "./interfaces";

const Wrapper = styled.div``;
const CanvasWrapper = styled(motion.div)`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  overflow: hidden;
`;
const Canvas = styled(motion.canvas)``;
const Rect = styled(motion.div)<{ position: string }>`
  position: absolute;
  ${(props) => (props.position === "right" ? "right:0;" : "left:0;")}
  width: 15%;
  height: 100%;
  background-color: white;
  z-index: 1;
  top: 0;
`;

function Section3({ scrollY }: ISectionProps) {
  console.log("section3 render");
  const canvasWidth = 1920;
  const canvasHeight = 1080;
  const windowWidth = useRecoilValue(windowWidthState);
  const windowHeight = useRecoilValue(windowHeightState);
  const info = useRecoilValue(section3State);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasRatio, setCanvasRatio] = useState(1);
  const section1Info = useRecoilValue(section1State);
  const section2Info = useRecoilValue(section2State);
  const rectWidth = canvasWidth * 0.15;
  const prevHeight = section1Info.scrollHeight + section2Info.scrollHeight;
  const scrollRatio = useTransform(
    scrollY,
    [prevHeight, prevHeight + info.scrollHeight],
    [0, 1]
  );
  const rectX1 = useTransform(
    scrollY,
    [prevHeight - windowHeight * 0.5, prevHeight],
    [0, -(rectWidth * canvasRatio)]
  );
  const rectX2 = useTransform(
    scrollY,
    [prevHeight - windowHeight * 0.5, prevHeight],
    [0, rectWidth * canvasRatio]
  );
  const blend1Height = useTransform(scrollRatio, [0, 0], [0, canvasHeight]);
  const blend2Height = useTransform(scrollRatio, [0, 0.3], [0, canvasHeight]);
  const blend3Height = useTransform(scrollRatio, [0.3, 0.6], [0, canvasHeight]);
  const wrapperScale = useTransform(scrollRatio, [0.6, 0.8], [1, 0.5]);

  // Transfrom canvas scale
  useEffect(() => {
    if (canvasRef.current) {
      const widthRatio = windowWidth / canvasRef.current.width;
      const heightRatio = windowHeight / canvasRef.current.height;
      const ratio = widthRatio < heightRatio ? heightRatio : widthRatio;
      setCanvasRatio(ratio);
    }
  }, [windowHeight, windowWidth, canvasRef]);

  // image load, draw
  const context = canvasRef.current?.getContext("2d");
  let img1 = new Image();
  let img2 = new Image();
  let img3 = new Image();

  if (info.objs.images) {
    img1.src = info.objs.images[0];
    img2.src = info.objs.images[1];
    img3.src = info.objs.images[2];
  }
  img1.onload = () => {
    context?.drawImage(img1, 0, 0);
  };

  // blend
  scrollRatio.on("change", (y) => {
    context?.drawImage(
      img1,
      0,
      canvasHeight - blend1Height.get(),
      canvasWidth,
      blend1Height.get(),
      0,
      canvasHeight - blend1Height.get(),
      canvasWidth,
      blend1Height.get()
    );
    context?.drawImage(
      img2,
      0,
      canvasHeight - blend2Height.get(),
      canvasWidth,
      blend2Height.get(),
      0,
      canvasHeight - blend2Height.get(),
      canvasWidth,
      blend2Height.get()
    );
    context?.drawImage(
      img3,
      0,
      canvasHeight - blend3Height.get(),
      canvasWidth,
      blend3Height.get(),
      0,
      canvasHeight - blend3Height.get(),
      canvasWidth,
      blend3Height.get()
    );
  });

  return (
    <Wrapper style={{ height: info.scrollHeight }}>
      <CanvasWrapper
        style={{
          scale: wrapperScale,
        }}
      >
        <Rect position="left" style={{ x: rectX1 }} />
        <Rect position="right" style={{ x: rectX2 }} />
        <Canvas
          style={{ scale: canvasRatio }}
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
        ></Canvas>
      </CanvasWrapper>
    </Wrapper>
  );
}

export default Section3;
