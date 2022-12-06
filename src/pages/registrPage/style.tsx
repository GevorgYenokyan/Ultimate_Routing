import styled from "styled-components";
import { Container } from "../../styles/styled";

export const FormContainer = styled(Container)`
  width: 400px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export interface formStyleType {
  width: string;
  margin: string;
  flexDirection: any;
  alignItems: string;
  backgroundColor: string;
  borderRadius: string;
}

export const formStyle: formStyleType = {
  width: "80%",
  margin: "0% auto",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: " #ffffff",
  borderRadius: "10px",
};

export interface formiItemType {
  textAlign: any;
  marginTop: string;
  margin: string;
}

export const formItem: formiItemType = {
  textAlign: "center",
  marginTop: "35px",
  margin: "0px !important",
};
