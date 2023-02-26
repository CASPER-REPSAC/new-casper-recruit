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
        // 1920 x 1080(권장), 이상은 잘림
        "images/blender-images/img1.jpg",
        "images/blender-images/img2.jpg",
        "images/blender-images/img3.jpg",
        "images/blender-images/img4.jpg",
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
    objs: {},
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
