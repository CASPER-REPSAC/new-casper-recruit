import { atom } from "recoil";

export interface ISection {
  type: string;
  heightNum: number; // 브라우저 높이의 배수로 높이 세팅
  scrollHeight: number;
  objs: {};
  values: {};
}

export const section1State = atom<ISection>({
  key: "section1",
  default: {
    type: "sticky",
    heightNum: 8,
    scrollHeight: 0,
    objs: {
      videoImages: [],
    },
    values: {},
  },
});
export const section2State = atom<ISection>({
  key: "section2",
  default: {
    type: "normal",
    heightNum: 1,
    scrollHeight: 0,
    objs: {},
    values: {},
  },
});
export const section3State = atom<ISection>({
  key: "section3",
  default: {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {},
    values: {},
  },
});
export const section4State = atom<ISection>({
  key: "section4",
  default: {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {},
    values: {},
  },
});

export const windowWidthState = atom<number>({
  key: "windowWidth",
  default: window.innerWidth,
});

export const windowHeightState = atom<number>({
  key: "windowHeight",
  default: window.innerHeight,
});
