import { FC, useState, useEffect, useCallback } from "react";
import type { TableProps } from "antd";
import { Table } from "antd";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { columns } from "./usersData/coloums";
import { data } from "./usersData/userData";
import { DataType } from "./usersData/coloums";
import { PaginationType } from "./usersData/userData";
import { GetUsersList } from "./usersData/getUsersList";

const Users: FC = (): JSX.Element => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});
  const [pagination, setPagination] = useState<PaginationType>({
    current: 1,
    pageSize: 20,
  });

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
    setPagination(pagination as PaginationType);
  };

  const getUsersTableList = useCallback(() => {
    GetUsersList(pagination, sortedInfo, filteredInfo);
  }, [sortedInfo, pagination, filteredInfo]);

  // useEffect(() => {
  //   getUsersTableList();
  // }, [sortedInfo, pagination, filteredInfo]);

  // console.log(filteredInfo, "query");

  let name = "John";

  function sayHi() {
    console.log("Hi, " + name);
    name = "Poxos";
    name = "Lendo";
  }

  name = "Vaspur";
  name = "Valod";

  useEffect(() => {
    sayHi();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={handleChange}
      pagination={{
        position: ["bottomCenter"],
        current: pagination.current,
        pageSize: pagination.pageSize,
        showSizeChanger: true,
      }}
      // scroll={{ x: "max-content" }}
    />
  );
};

export default Users;
