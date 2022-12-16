import { RootState } from "../../store/store";

export function selectUsersList(state: RootState) {
  return state.userList.listData;
}
