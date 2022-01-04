import { IState } from "@/typings";
import { MODIFY_ISSHOWPLAYER } from "./actionTypes";
export default {
  [MODIFY_ISSHOWPLAYER](state: IState): void {
    state.isShowPlayer = !state.isShowPlayer;
  },
};
