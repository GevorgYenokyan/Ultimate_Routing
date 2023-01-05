import { FC, useState, useEffect } from "react";
import UiVirtualScroll from "./components/VirtualScroll";

type ItemType = string;

const VirtualScrollList: FC = (): JSX.Element => {
  const limit = 10;

  const buffer = limit * 3;

  const cache = buffer - limit;
  const [items, setItems] = useState<ItemType[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const callApi = (offset: number, limit: number): Promise<ItemType[]> => {
    return new Promise((resolve) => {
      const items = [] as ItemType[];
      for (let index = offset; index < offset + limit; index++) {
        items.push("label " + index);
      }

      setTimeout(() => {
        resolve(items);
      }, 2000);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    callApi(0, buffer).then((res: ItemType[]) => {
      setItems(res);
      setIsLoading(false);
    });
  }, []);

  const prevCallback = (newOffset: number): Promise<boolean> => {
    setIsLoading(true);

    return callApi(newOffset, limit).then((res: ItemType[]) => {
      const newItems = [...res, ...items.slice(0, cache)] as ItemType[];
      setItems(newItems);
      setIsLoading(false);
      return true;
    });
  };

  const nextCallback = (newOffset: number): Promise<boolean> => {
    setIsLoading(true);

    return callApi(newOffset, limit).then((res: ItemType[]) => {
      const newItems = [...items.slice(-cache), ...res] as ItemType[];
      setItems(newItems);
      setIsLoading(false);
      return true;
    });
  };

  return (
    <div>
      <UiVirtualScroll
        buffer={buffer}
        rowHeight={39}
        height="50vh"
        limit={limit}
        onPrevCallback={prevCallback}
        onNextCallback={nextCallback}
        offset={0}
      >
        <>
          {items.map((item: ItemType, index: number) => (
            <div style={{ padding: "10px", color: "black" }}>
              {isLoading ? <>Loading...</> : item}
            </div>
          ))}
        </>
      </UiVirtualScroll>
    </div>
  );
};

export default VirtualScrollList;
