import React, { useState } from "react";
import type { TableProps } from "antd";
import { Table } from "antd";
import type { FilterValue, SorterResult } from "antd/es/table/interface";
import { columns } from "./usersData/coloums";
import { data } from "./usersData/userData";
import { DataType } from "./usersData/coloums";

const Users: React.FC = () => {
  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  return <Table columns={columns} dataSource={data} onChange={handleChange} />;
};

export default Users;
