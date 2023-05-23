import { atom } from "recoil";

export const isHomePage = atom<boolean>({
  key: "isHomePage",
  default: true,
});
