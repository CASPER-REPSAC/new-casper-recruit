import { MotionValue } from "framer-motion";

export interface ISticky {
  sticky?: string;
}

export interface ISectionProps {
  scrollY: MotionValue<number>;
}
