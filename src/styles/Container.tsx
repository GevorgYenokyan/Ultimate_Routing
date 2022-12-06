interface Props {
  cdisplay?: String;
  className?: string;
  fontSize?: any;
  color?: string;
  children?: any;
  backgroundColor?: String;
}
export const Container: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => {
  return <div className={className}>{children}</div>;
};
