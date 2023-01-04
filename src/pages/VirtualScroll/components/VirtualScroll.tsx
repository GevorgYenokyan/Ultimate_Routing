import { useRef, useEffect, useState, FC } from "react";

interface VirtualScrollProps {
  itemCount: number;
  renderItem: (index: number) => React.ReactNode;
  itemHeight: number;
}

const VirtualScroll: FC<VirtualScrollProps> = ({
  itemCount,
  renderItem,
  itemHeight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  const renderItems = () => {
    const items: React.ReactNode[] = [];
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + 20, itemCount);
    for (let i = startIndex; i < endIndex; i++) {
      items.push(renderItem(i));
    }
    return items;
  };

  return (
    <div
      ref={containerRef}
      style={{ overflow: "auto", height: "100vh" }}
      onScroll={() => {
        handleScroll();
      }}
    >
      <div style={{ height: `${itemCount * itemHeight}px` }}>
        {renderItems()}
      </div>
    </div>
  );
};

export default VirtualScroll;
