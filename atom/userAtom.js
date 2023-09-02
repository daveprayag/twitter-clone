import { atom } from "recoil";
export const userState = atom({
  key: "userState", //unique ID (wrt to other atoms)
  default: null, //default value (i.e no user at first)
});
