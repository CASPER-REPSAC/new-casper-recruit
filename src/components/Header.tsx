import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  padding-left: 100px;
  height: 66px;
`;
const A = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.2em;
`;

function Header() {
  return (
    <Nav>
      <img src="casper_logo_black.png" width={200}></img>
      <A href="/">Homepage</A>
    </Nav>
  );
}
export default Header;
