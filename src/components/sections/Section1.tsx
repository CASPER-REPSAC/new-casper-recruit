import { motion, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import { section1State, windowHeightState, windowWidthState } from "../../atom";
import { ISectionProps } from "./interfaces";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { CasperWhite } from "../Casper";

const Sticky = styled(motion.div)`
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const Iframe = styled.iframe`
  width: 560px;
  height: 315px;
  @media screen and (max-width: 1024px) {
    scale: 0.5;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const StickyDiv = styled(Sticky)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Message = styled(motion.div)`
  position: absolute;
  font-size: 6rem;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
`;

const H1 = styled.h1`
  font-size: 1em;
  font-weight: bold;
  text-align: center;
`;
const H2 = styled.h2`
  font-size: 0.7em;
  font-weight: 400;
  text-align: center;
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
  const info = useRecoilValue(section1State);
  const [videoImages, setVideoImages] = useState<Array<HTMLImageElement>>([]);
  const [imgLoad, setImgLoad] = useState(false);
  const scrollRatio = useTransform(scrollY, [0, info.scrollHeight], [0, 1]);
  // animation values
  const opacity1 = useTransform(
    scrollRatio,
    [0.3, 0.37, 0.41, 0.45],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollRatio,
    [0.45, 0.52, 0.56, 0.6],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollRatio,
    [0.6, 0.67, 0.71, 0.75],
    [0, 1, 1, 0]
  );
  const opacity4 = useTransform(
    scrollRatio,
    [0.75, 0.82, 0.86, 0.9],
    [0, 1, 1, 0]
  );
  const y1 = useTransform(
    scrollRatio,
    [0.3, 0.37, 0.41, 0.45],
    [20, 0, 0, -20]
  );
  const y2 = useTransform(
    scrollRatio,
    [0.45, 0.52, 0.56, 0.6],
    [20, 0, 0, -20]
  );
  const y3 = useTransform(
    scrollRatio,
    [0.6, 0.67, 0.71, 0.75],
    [20, 0, 0, -20]
  );
  const y4 = useTransform(
    scrollRatio,
    [0.75, 0.82, 0.86, 0.9],
    [20, 0, 0, -20]
  );
  const imgIdx = useTransform(scrollRatio, [0, 1], [0, 764]);
  const videoOpacity = useTransform(scrollRatio, [0.9, 1], [1, 0]);

  // Load images
  useEffect(() => {
    const videoImages: Array<HTMLImageElement> = [];
    for (let i = 0; i < 765; i++) {
      const img = new Image();
      img.src = `images/hacking2-images/img-${i + 1}.jpg`;
      videoImages.push(img);
    }
    setVideoImages(videoImages);
    setImgLoad(true);
  }, []);

  // Set canvas scale
  useEffect(() => {
    if (canvasRef.current) {
      const widthRatio = windowWidth / canvasRef.current?.width;
      const heightRatio = windowHeight / canvasRef.current?.height;
      const ratio = widthRatio < heightRatio ? heightRatio : widthRatio;
      setCanvasRatio(ratio);
    }
  }, [windowHeight, windowWidth]);

  // Draw images
  if (imgLoad) {
    context?.drawImage(videoImages[Math.round(imgIdx.get())], 0, 0);
    imgIdx.on("change", (idx) => {
      context?.drawImage(videoImages[Math.round(idx)], 0, 0);
    });
  }

  return (
    <Wrapper style={{ height: info.scrollHeight }}>
      <Div>
        <CasperWhite />
      </Div>
      <Div>
        <Iframe
          src="https://www.youtube.com/embed/rkmVWnijyA8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ zIndex: 3 }}
        ></Iframe>
      </Div>
      <StickyDiv>
        <Message style={{ opacity: opacity1, y: y1 }}>Hacking</Message>
        <Message style={{ opacity: opacity2, y: y2 }}>Programming</Message>
        <Message style={{ opacity: opacity3, y: y3 }}>Security</Message>
        <Message style={{ opacity: opacity4, y: y4 }}>
          <H2>창원대학교</H2>
          <H1>정보 보안 동아리</H1>
        </Message>
      </StickyDiv>

      <CavasWrapper>
        <Canvas
          style={{ scale: canvasRatio, opacity: videoOpacity }}
          ref={canvasRef}
          width={1920}
          height={1080}
        ></Canvas>
      </CavasWrapper>
    </Wrapper>
  );
}

export default Section1;
