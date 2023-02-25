import { useScroll } from "framer-motion";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  ISection,
  section1State,
  section2State,
  section3State,
  section4State,
  windowHeightState,
  windowWidthState,
} from "./atom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";

const Wrapper = styled.div``;

function App() {
  console.log("APP rendering");
  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);
  const setWindowWidth = useSetRecoilState(windowWidthState);
  const setSection1 = useSetRecoilState<ISection>(section1State);
  const setSection2 = useSetRecoilState<ISection>(section2State);
  const setSection3 = useSetRecoilState<ISection>(section3State);
  const setSection4 = useSetRecoilState<ISection>(section4State);
  const { scrollY } = useScroll();

  // Set layout
  useEffect(() => {
    setSection1((old) => {
      const copy = { ...old };
      copy.scrollHeight = old.heightNum * windowHeight;
      return copy;
    });
    setSection2((old) => {
      const copy = { ...old };
      copy.scrollHeight = old.heightNum * windowHeight;
      return copy;
    });
    setSection3((old) => {
      const copy = { ...old };
      copy.scrollHeight = old.heightNum * windowHeight;
      return copy;
    });
    setSection4((old) => {
      const copy = { ...old };
      copy.scrollHeight = old.heightNum * windowHeight;
      return copy;
    });
  }, [setSection1, setSection2, setSection3, setSection4, windowHeight]);

  // Set innerheight
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Wrapper>
        <Header />
        <Section1 scrollY={scrollY}></Section1>
        <Section2 scrollY={scrollY}></Section2>
        <Section3 scrollY={scrollY}></Section3>
        <Section4 />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
