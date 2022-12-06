import { FC } from "react";
import LoginForm from "./companents/LoginForm";
import { Container } from "../../styles/styled";
import { FormContainer } from "./style";

const Login: FC = (): JSX.Element => {
  return (
    <Container>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </Container>
  );
};

export default Login;
