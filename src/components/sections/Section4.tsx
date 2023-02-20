import { useRecoilState } from "recoil";
import styled from "styled-components";
import { section4State } from "../../atom";
import { ISectionProps } from "./interfaces";

const Wrapper = styled.div`
  border: 1px solid red;
`;

function Section4({ scrollY }: ISectionProps) {
  const [info, setInfo] = useRecoilState(section4State);

  return <Wrapper style={{ height: info.scrollHeight }}></Wrapper>;
}

export default Section4;
