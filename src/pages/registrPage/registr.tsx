import React from "react";
import { Container } from "../../styles/styled";
import RegistrForm from "./components/RegistrForm";
import { FormContainer } from "./style";

const Registr: React.FC = (): JSX.Element => {
  return (
    <>
      <Container>
        <FormContainer>
          <RegistrForm />
        </FormContainer>
      </Container>
    </>
  );
};

export default Registr;
