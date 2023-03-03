import { atom } from "recoil";

export interface ISection {
  type: string;
  heightNum: number; // 브라우저 높이의 배수로 높이 세팅
  scrollHeight: number;
  objs: {
    images?: string[];
    videoImages?: string[];
  };
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
  },
});
export const section2State = atom<ISection>({
  key: "section2",
  default: {
    type: "sticky",
    heightNum: 7,
    scrollHeight: 0,
    objs: {},
  },
});
export const section3State = atom<ISection>({
  key: "section3",
  default: {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      images: [
        // 해상도 너무 높은거 쓰지 말 것
        "images/blender-images/img1.jpg",
        "images/blender-images/img2.jpg",
      ],
    },
  },
});

export const section4State = atom<ISection>({
  key: "section4",
  default: {
    type: "normal",
    heightNum: 3,
    scrollHeight: 0,
    objs: {
      images: [
        "images/after-casper/ahnlab.png",
        "images/after-casper/bnk.png",
        "images/after-casper/cyberone.png",
        "images/after-casper/denso.png",
        "images/after-casper/estsoft.png",
        "images/after-casper/kakaobank.png",
        "images/after-casper/naver.png",
        "images/after-casper/nhn.png",
        "images/after-casper/penta.png",
        "images/after-casper/samsung.png",
        "images/after-casper/shinhan.png",
        "images/after-casper/skinfo.png",
        "images/after-casper/tiger.png",
      ],
    },
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
