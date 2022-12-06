import { FC } from "react";
import { ErrorContainer, Text } from "../styles/styled";
export interface ErrorMessageprops {
  message: {
    text: string;
  };
}

export default function ErrorMessage({
  message,
}: ErrorMessageprops): JSX.Element {
  return (
    <ErrorContainer text={message.text}>
      <Text>{message.text}</Text>
    </ErrorContainer>
  );
}
