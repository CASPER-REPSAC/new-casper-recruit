import { useRecoilState } from "recoil";
import styled from "styled-components";
import { section2State } from "../../atom";
import { ISectionProps } from "./interfaces";
const Wrapper = styled.div`
  border: 1px solid red;
`;
function Section2({ scrollY }: ISectionProps) {
  const [info, setInfo] = useRecoilState(section2State);

  return <Wrapper style={{ height: info.scrollHeight }}></Wrapper>;
}

export default Section2;
