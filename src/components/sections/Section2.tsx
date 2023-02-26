import { motion, useTransform } from "framer-motion";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { section1State, section2State } from "../../atom";
import { ISectionProps } from "./interfaces";

const Sticky = styled(motion.div)`
  position: sticky;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;
`;

const StickyBody = styled(Sticky)`
  top: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  padding-top: 10vh;
  padding-bottom: 10vh;

  background-color: rgb(249, 249, 249);
`;
const Title = styled.div`
  align-items: center;
  text-align: center;
`;
const Items = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 700px;
  height: 200px;
  margin: 0;
  margin-top: 2em;

  @media screen and (max-width: 1024px) {
    height: 50vh;
  }
`;
const Item = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const P = styled.p`
  font-size: 1.1rem;
`;
const Message = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  right: 10vw;
  font-weight: lighter;
`;
const Circle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 4px solid #f1f1f1;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
`;
const H1 = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.2em;
`;
const H2 = styled.div`
  font-size: 1.1rem;
  font-weight: lighter;
`;
const H3 = styled.div`
  font-size: 2rem;
`;
const H4 = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

function Section2({ scrollY }: ISectionProps) {
  const section1Info = useRecoilValue(section1State);
  const prevHeight = section1Info.scrollHeight;
  const info = useRecoilValue(section2State);
  const scrollRatio = useTransform(
    scrollY,
    [prevHeight, prevHeight + info.scrollHeight],
    [0, 1]
  );

  const opacity1 = useTransform(
    scrollRatio,
    [0.1, 0.18, 0.22, 0.25],
    [0, 1, 1, 0]
  );
  const opacity2 = useTransform(
    scrollRatio,
    [0.25, 0.33, 0.37, 0.4],
    [0, 1, 1, 0]
  );
  const opacity3 = useTransform(
    scrollRatio,
    [0.4, 0.48, 0.52, 0.55],
    [0, 1, 1, 0]
  );
  const opacity4 = useTransform(
    scrollRatio,
    [0.55, 0.63, 0.67, 0.7],
    [0, 1, 1, 0]
  );

  const x1 = useTransform(
    scrollRatio,
    [0.1, 0.18, 0.22, 0.25],
    [50, 0, 0, -50]
  );
  const x2 = useTransform(
    scrollRatio,
    [0.25, 0.33, 0.37, 0.4],
    [50, 0, 0, -50]
  );
  const x3 = useTransform(
    scrollRatio,
    [0.4, 0.48, 0.52, 0.55],
    [50, 0, 0, -50]
  );
  const x4 = useTransform(
    scrollRatio,
    [0.55, 0.63, 0.67, 0.7],
    [50, 0, 0, -50]
  );

  return (
    <Wrapper style={{ height: info.scrollHeight }}>
      <StickyBody>
        <Title>
          <H1>ABOUT US</H1>
          <H2>Casper의 연혁과 소개입니다.</H2>
        </Title>
        <Items>
          <Item style={{ opacity: opacity1, x: x1 }}>
            <Circle>
              <Img src="images/aboutus/1.jpg" alt="1" />
            </Circle>
            <Message>
              <H3>MAY 2000</H3>
              <H4>Beginnings</H4>
              <P>
                2000년 5월 1일 이종근 교수님 아래서 창단된 정보보호
                동아리입니다. 보안과 관련된 여러 가지 분야에 대해 학습하며,
                학습한 내용에 대한 내부세미나를 실시하여 동아리원이 같이 성장해
                나가고 있습니다. 현재는 차정원 교수님의 지도아래 있습니다
              </P>
            </Message>
          </Item>
          <Item style={{ opacity: opacity2, x: x2 }}>
            <Circle>
              <Img src="images/aboutus/2.jpg" alt="2" />
            </Circle>
            <Message>
              <H3>JUNE 2006</H3>
              <H4>WE ARE CERT</H4>
              <P>
                창원대학교 정보전산원에 소속된 CERT팀은 매월 E-Clean Day를
                실시하여 학내 컴퓨터 보안에 대한 점검과, 학내망 모의해킹을 통한
                서버점검을 실시하고 있습니다.
              </P>
            </Message>
          </Item>

          <Item style={{ opacity: opacity3, x: x3 }}>
            <Circle>
              <Img src="images/aboutus/3.jpg" alt="3" />
            </Circle>
            <Message>
              <H3>JULY 2006</H3>
              <H4>FOUND U.U.U</H4>
              <P>
                창원대학교와 함께 전국의 대학교가 모여 CERT팀 연합을 위해 설립한
                연합으로써 매년 2회 씩 정기 워크샵을 개최해 다양한 정보보호
                기술을 공유하고 있습니다. 또한 참여대학간의 교류 증진을 위해
                여러가지 커뮤니티 활동을 하고 있습니다.
              </P>
            </Message>
          </Item>

          <Item style={{ opacity: opacity4, x: x4 }}>
            <Circle>
              <Img src="images/aboutus/4.jpg" alt="4" />
            </Circle>
            <Message>
              <H3>MAY 2008</H3>
              <H4>Join KUCIS</H4>
              <P>
                한국인터넷진흥원(KISA)에서 발주한 사업으로 40여개의 전국
                정보보호 동아리로 구성되어 있으며, 현재까지 KUCIS로 부터
                여러가지 지원과, 교육 및 세미나 등을 제공받고 있습니다.
              </P>
            </Message>
          </Item>
        </Items>
      </StickyBody>
    </Wrapper>
  );
}

export default Section2;
