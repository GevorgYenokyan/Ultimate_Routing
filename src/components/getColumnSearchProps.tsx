import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import type { ColumnType } from "antd/es/table";

export const getColumnSearchProps = <T,>(): ColumnType<T> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        allowClear
        autoFocus
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
