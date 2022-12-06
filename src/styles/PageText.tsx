import React from "react";

interface Props {
  className?: string;
  fontSize?: any;
  color?: string;
  children?: any;
}
export const PageText: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => {
  return <span className={className}>{children}</span>;
};
