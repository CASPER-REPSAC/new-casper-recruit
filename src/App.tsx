import { useScroll } from "framer-motion";
import React, { useEffect } from "react";
import { Cookies } from "react-cookie";
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
  // 필요 없는 코드 일지도? 확인 귀찮아서 그대로 둠
  const cookies = new Cookies();
  cookies.set("crossCookie", "bar", { secure: true, sameSite: "none" });
  //

  const [windowHeight, setWindowHeight] = useRecoilState(windowHeightState);
  const setWindowWidth = useSetRecoilState(windowWidthState);
  const setSection1 = useSetRecoilState<ISection>(section1State);
  const setSection2 = useSetRecoilState<ISection>(section2State);
  const setSection3 = useSetRecoilState<ISection>(section3State);
  const setSection4 = useSetRecoilState<ISection>(section4State);
  const { scrollY, scrollYProgress } = useScroll();

  // Section1 ~ 4 높이 설정
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

  // window resize 반응하여 높이 너비 설정
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.screen.height);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Wrapper>
      <Header scrollYProgress={scrollYProgress} />
      <Section1 scrollY={scrollY}></Section1>
      <Section2 scrollY={scrollY}></Section2>
      <Section3 scrollY={scrollY}></Section3>
      <Section4 />
      <Footer />
    </Wrapper>
  );
}

export default App;
