import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { FaWifi, FaLaptop, FaFileAlt, FaLock } from "react-icons/fa";
import { section4State } from "../../atom";
import { useRecoilValue } from "recoil";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4em;
  width: 90%;
  background-color: rgb(249, 249, 249);
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

const Row = styled(motion.div)`
  display: flex;
  width: 90%;
  gap: 5em;
  justify-content: space-between;
  margin-bottom: 1em;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;
const Item = styled(motion.div)`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.2em;
`;
const H2 = styled.div`
  font-size: 1.1rem;
  margin-bottom: 2em;
  font-weight: lighter;
`;
const H3 = styled.div`
  font-size: 1.1rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
const Desc = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  width: 90%;
  text-align: center;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #0066cc;
  border-radius: 50%;
`;

const Button = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0066cc;
  font-size: 1.5rem;
  border: #0066cc 1px solid;
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 1em;
  text-decoration: none;
`;

const JoinDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: lighter;
  text-align: center;
  height: 60px;
  margin-top: 1em;
  width: 90%;
`;

const rowVars: Variants = {
  initial: {},
  animate: {
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};
const itemVars: Variants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Img = styled(motion.img)`
  height: 30px;
`;

function Section4() {
  const info = useRecoilValue(section4State);

  return (
    <Wrapper>
      <Div>
        <H1>EDUCATION</H1>
        <H2>신입회원 대상으로 진행되는 교육과정입니다.</H2>
        <Row
          variants={rowVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Item variants={itemVars}>
            <Circle>
              <FaFileAlt color="white" size={60} />
            </Circle>
            <H3>C Language</H3>
            <Desc>
              기초적인 C언어 문법과 <br />
              간단한 프로그램 작성
            </Desc>
          </Item>
          <Item variants={itemVars}>
            <Circle>
              <FaLaptop color="white" size={60} />
            </Circle>
            <H3>Linux</H3>
            <Desc>
              리눅스 사용법과 기초적인
              <br /> 리눅스 서버 관리
            </Desc>
          </Item>
          <Item variants={itemVars}>
            <Circle>
              <FaLock color="white" size={60} />
            </Circle>
            <H3>Security</H3>
            <Desc>
              보안에 대한 기초적인
              <br />
              지식 및 분야에 대한
              <br />
              지식 습득
            </Desc>
          </Item>
          <Item variants={itemVars}>
            <Circle>
              <FaWifi color="white" size={60} />
            </Circle>
            <H3>Network</H3>
            <Desc>
              네트워크에 대한 <br />
              기초이론과 실습
            </Desc>
          </Item>
        </Row>
      </Div>
      <Div>
        <H1>AFTER CASPER</H1>
        <H2>Casper 졸업 그 이후...</H2>
        <Row
          variants={rowVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {info.objs.images?.map((path, idx) => (
            <Img variants={itemVars} src={path} key={idx} />
          ))}
        </Row>
      </Div>
      <Div>
        <H1>JOIN US</H1>
        <Button
          href="https://forms.gle/siW8demcHTMSbtL69"
          whileHover={{
            backgroundColor: "#0066cc",
            color: "rgb(255,255,255)",
          }}
        >
          지원 하기
        </Button>
        <JoinDesc>
          <div>기간: 23. 03. 13 까지</div>
          <div>
            대상: 창원대학교 컴퓨터공학과 1,2학년 / 정보통신공학과 1학년
          </div>
        </JoinDesc>
      </Div>
    </Wrapper>
  );
}

export default Section4;
