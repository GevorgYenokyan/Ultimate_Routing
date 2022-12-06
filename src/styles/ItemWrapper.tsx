import { FC } from "react";

interface Props {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
  children?: any;
}
export const PageItemWrapper: FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
