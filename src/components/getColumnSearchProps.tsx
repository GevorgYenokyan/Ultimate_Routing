import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { ColumnType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type DataIndex = keyof DataType;

export const getColumnSearchProps = (): ColumnType<DataType> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        allowClear
        autoFocus
        placeholder={`Search `}
        value={selectedKeys[0]}
        onChange={(e) => {
          setSelectedKeys(e.target.value ? [e.target.value] : []);
          confirm({ closeDropdown: false });
        }}
      />
    </div>
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
});
