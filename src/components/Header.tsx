import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  z-index: 10;
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
`;

function Header() {
  return (
    <Nav>
      <Items>
        <Logo src="casper_logo_white.png" alt="logo" width={130}></Logo>
        <A whileHover={{ backgroundColor: "#0066cc" }} href="/">
          Homepage
        </A>
        <A whileHover={{ backgroundColor: "#0066cc" }} href="/">
          지원 하기
        </A>
      </Items>
    </Nav>
  );
}
export default Header;
