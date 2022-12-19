import type { ColumnsType } from "antd/es/table/interface";
import { getColumnSearchProps } from "../../../components/getColumnSearchProps";

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: [
      { text: "Joe", value: "Joe" },
      { text: "Jim", value: "Jim" },
    ],

    ellipsis: true,
    ...getColumnSearchProps(),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: true,
    ellipsis: true,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",

    ellipsis: true,
  },
];
