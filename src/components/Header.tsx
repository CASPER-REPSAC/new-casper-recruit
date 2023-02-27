import { motion, MotionValue, useSpring } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 10;
`;
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background-color: rgb(22, 22, 22);
`;
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  font-size: 1rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const A = styled(motion.a)`
  color: white;
  text-decoration: none;
  margin-left: 1em;
  padding: 5px 15px 5px 15px;
  border-radius: 100000px;
  font-weight: lighter;
  @media screen and (max-width: 1024px) {
    margin-left: 0.7em;
    padding: 4px 10px 4px 10px;
  }
`;
const Logo = styled.img`
  margin-right: auto;
  @media screen and (max-width: 1024px) {
    width: 90px;
  }
`;

const Indicator = styled(motion.div)`
  position: relative;
  left: 0;
  background-color: #0066cc;
  width: 100%;
  height: 10px;
  transform-origin: 0%;
`;

function Header({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <Wrapper>
      <Nav>
        <Items>
          <Logo src="casper_logo_white.png" alt="logo" width={130}></Logo>
          <A
            whileHover={{ backgroundColor: "#0066cc" }}
            href="#"
            onClick={() => {
              alert("페이지 준비 중 입니다!");
            }}
          >
            Homepage
          </A>
          <A
            whileHover={{ backgroundColor: "#0066cc" }}
            href="https://forms.gle/siW8demcHTMSbtL69"
          >
            지원 하기
          </A>
        </Items>
      </Nav>
      <Indicator style={{ scaleX }} />
    </Wrapper>
  );
}
export default Header;
