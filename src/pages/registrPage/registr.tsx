import React from "react";

import RegistrForm from "./components/RegistrForm";

import { FormContainer } from "./style";
import { Container } from "../../styles/styled";

const Registr: React.FC = (): JSX.Element => {
  return (
    <Container>
      <FormContainer>
        <RegistrForm />
      </FormContainer>
    </Container>
  );
};

export default Registr;
