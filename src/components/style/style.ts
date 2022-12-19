import styled from "styled-components";

export interface formiItemType {
  marginTop: string;
  margin: string;
  height: string;
  borderRadius: string;
}

export const formItem: formiItemType = {
  marginTop: "35px",
  margin: "0px !important",
  height: "30px",
  borderRadius: "10px",
};

export const ContainerApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;
`;
