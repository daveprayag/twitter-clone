import { atom } from "recoil";
export const modalState = atom({
  key: "modalState", //unique ID (wrt to other atoms)
  default: false, //default value (i.e no user at first)
});

export const postIdState = atom({
  key: "postIdState", //unique ID (wrt to other atoms)
  default: "id", //default value (i.e no user at first)
});
