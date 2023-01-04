import { FC } from "react";
import VirtualScroll from "./components/VirtualScroll";

const itemCount = 1000;

interface ScrollListType {
  id: number;
  name: string;
}

const scrollList: ScrollListType[] = [];
for (let i = 0; i < itemCount; i++) {
  scrollList.push({
    id: i,
    name: `Item ${i}`,
  });
}

const VirtualScrollList: FC = () => {
  const renderItem = (index: number) => {
    const item = scrollList[index];
    return (
      <div key={item.id} style={{ color: "red", fontSize: "25px" }}>
        {item.name}
      </div>
    );
  };

  return (
    <VirtualScroll
      itemCount={itemCount}
      renderItem={renderItem}
      itemHeight={50}
    />
  );
};

export default VirtualScrollList;
