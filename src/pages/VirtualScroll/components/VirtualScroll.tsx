import { useRef, useEffect, useState, FC } from "react";

export interface UiVirtualScrollProps<T> {
  offset: 0;
  buffer: number;
  limit: number;
  rowHeight: number;
  height: string;
  onPrevCallback: (data: T) => T;
  onNextCallback: (data: T) => T;
  children: JSX.Element;
}

const UiVirtualScroll: FC<UiVirtualScrollProps<any>> = ({
  offset,
  buffer,
  limit,
  rowHeight,
  height,
  onPrevCallback,
  onNextCallback,
  children,
}) => {
  const overlayRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const [upperBoundary, setUpperBoundary] = useState<number>(offset);

  const [lowerBoundary, setLowerBoundary] = useState<number>(buffer - 1);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const [currentScrollTopPosition, setCurrentScrollTopPosition] =
    useState<number>(0);

  const handleScroll = (target: HTMLDivElement) => {
    if (isLoading) {
      return;
    }

    const scrollTop = Math.round(target.scrollTop);

    const clientHeight = Math.round(target.clientHeight);
    const scrollHeight = Math.round(target.scrollHeight);

    const isUp = scrollTop < currentScrollTopPosition;

    if (isUp && scrollTop === 0) {
      setIsLoading(true);

      onPrevCallback(upperBoundary - limit).then(() => {
        setUpperBoundary(upperBoundary - limit);
        setLowerBoundary(lowerBoundary - limit);

        if (overlayRef !== null && overlayRef.current !== null) {
          const scrollPos = limit * rowHeight;
          overlayRef.current.scrollTo(0, scrollPos);
        }
        setIsLoading(false);
      });
    } else if (!isUp && scrollTop + clientHeight >= scrollHeight) {
      setIsLoading(true);

      onNextCallback(lowerBoundary).then(() => {
        setUpperBoundary(upperBoundary + limit);
        setLowerBoundary(lowerBoundary + limit);

        if (overlayRef !== null && overlayRef.current !== null) {
          const scrollPos = limit * rowHeight;

          overlayRef.current.scrollTo(0, scrollPos * 2);
        }
        setIsLoading(false);
      });
    }

    setCurrentScrollTopPosition(scrollTop);
  };

  return (
    <div
      ref={overlayRef}
      style={{ height, overflow: "scroll" }}
      onScroll={(e: any) => handleScroll(e.target)}
    >
      {children}
    </div>
  );
};

export default UiVirtualScroll;
