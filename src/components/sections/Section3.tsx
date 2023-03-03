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
  width: 15vw;
  height: 100%;
  background-color: white;
  z-index: 1;
  top: 0;
`;

function Section3({ scrollY }: ISectionProps) {
  const canvasWidth = 1440;
  const canvasHeight = 810;
  const section1Info = useRecoilValue(section1State);
  const section2Info = useRecoilValue(section2State);
  const windowWidth = useRecoilValue(windowWidthState);
  const windowHeight = useRecoilValue(windowHeightState);
  const info = useRecoilValue(section3State);
  const [img1, setImg1] = useState<HTMLImageElement>();
  const [img2, setImg2] = useState<HTMLImageElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasRatio, setCanvasRatio] = useState(1);

  const rectWidth = windowWidth * 0.15;
  const prevHeight = section1Info.scrollHeight + section2Info.scrollHeight;
  const scrollRatio = useTransform(
    scrollY,
    [prevHeight, prevHeight + info.scrollHeight],
    [0, 1]
  );
  const rectX1 = useTransform(
    scrollY,
    [prevHeight - windowHeight * 0.5, prevHeight],
    [0, -rectWidth]
  );
  const rectX2 = useTransform(
    scrollY,
    [prevHeight - windowHeight * 0.5, prevHeight],
    [0, rectWidth]
  );
  const blend1Height = useTransform(scrollRatio, [0, 0.5], [0, canvasHeight]);
  const wrapperScale = useTransform(scrollRatio, [0.5, 0.8], [1, 0.5]);
  const context = canvasRef.current?.getContext("2d");

  // Transfrom canvas scale
  useEffect(() => {
    if (canvasRef.current) {
      const widthRatio = windowWidth / canvasRef.current.width;
      const heightRatio = windowHeight / canvasRef.current.height;
      const ratio = widthRatio < heightRatio ? heightRatio : widthRatio;
      setCanvasRatio(ratio);
    }
  }, [windowHeight, windowWidth, canvasRef]);

  // image load
  useEffect(() => {
    let imgObj1 = new Image();
    let imgObj2 = new Image();
    if (info.objs.images) {
      imgObj1.src = info.objs.images[0];
      imgObj2.src = info.objs.images[1];
    }

    imgObj1.onload = () => {
      setImg1(imgObj1);
    };
    imgObj2.onload = () => {
      setImg2(imgObj2);
    };
  }, [info.objs.images]);

  // 첫 로드시 이미지 draw
  useEffect(() => {
    if (img1 && img2) {
      const y = scrollRatio.get();
      if (y < 0.3) {
        const blendHeight = blend1Height.get();
        context?.drawImage(
          img1,
          0,
          0,
          canvasWidth,
          canvasHeight - blendHeight,
          0,
          0,
          canvasWidth,
          canvasHeight - blendHeight
        );
        context?.drawImage(
          img2,
          0,
          canvasHeight - blendHeight,
          canvasWidth,
          blendHeight,
          0,
          canvasHeight - blendHeight,
          canvasWidth,
          blendHeight
        );
      } else {
        context?.drawImage(img2, 0, 0);
      }
    }
  });

  useEffect(() => {
    if (img1 && img2) {
      // 0 ~ 0.3 구간 애니메이션
      blend1Height.on("change", (h) => {
        const blendHeight = Math.round(h);
        context?.drawImage(
          img1,
          0,
          0,
          canvasWidth,
          canvasHeight - blendHeight,
          0,
          0,
          canvasWidth,
          canvasHeight - blendHeight
        );
        context?.drawImage(
          img2,
          0,
          canvasHeight - blendHeight,
          canvasWidth,
          blendHeight,
          0,
          canvasHeight - blendHeight,
          canvasWidth,
          blendHeight
        );
      });
    }
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
