import { FC } from "react";
import styled from "styled-components";
import { memo } from "react";
import Navlinks from "./components/Navlinks";

const Navigation: FC = (): JSX.Element => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Container>
      <Navlinks />
    </Container>
  );
};

export default memo(Navigation);
