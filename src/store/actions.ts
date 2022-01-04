import { IState } from "@/typings";
import { Commit } from "vuex";
import { MODIFY_ISSHOWPLAYER } from "./actionTypes";

interface ICtx {
  commit: Commit;
  state: IState;
}

export default {
  [MODIFY_ISSHOWPLAYER]({ commit }: ICtx): void {
    commit(MODIFY_ISSHOWPLAYER);
  },
};
