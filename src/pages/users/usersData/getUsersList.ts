import REQUESTS from "../../../api/requests";
import { PaginationType } from "./userData";
import { DataType } from "./coloums";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { createQuerySearch } from "../../../components/createQuerySearch";
import { AppDispatch } from "../../../redux/store/store";
import { useAppDispatch } from "../../../redux/features/reduxHuks";
import { addList } from "../../../redux/features/usersList/usersListSlise";

export function GetUsersList<T>(
  pagination: PaginationType,
  sortedInfo: SorterResult<DataType>,
  filteredInfo: Record<string, FilterValue | null>
) {
  let sort = [`${sortedInfo.field}, DESC`];
  if ((sortedInfo.field, sortedInfo.order === "ascend")) {
    sort = [`${sortedInfo.field}, ASC`];
  } else {
    sort = [`${sortedInfo.field}, DESC`];
  }

  const dispatch = useAppDispatch();
  const query = {
    page: pagination.current,
    limit: pagination.pageSize,
    pagination: pagination.current,
    sort: sort,
    search: {},
  };

  query.search = createQuerySearch(filteredInfo);
  if (query.search) {
    query.search = JSON.stringify(query.search);
  }

  function callback<T>(data: T) {}

  function errorCallback<T>(err: T) {}

  REQUESTS.USERS.GET(query, callback, errorCallback);
}
