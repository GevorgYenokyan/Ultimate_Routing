import styled from "styled-components";

const primaryColor = ` #4cf661;`;
const color = `#fff;`;
const secondarybackground = `#fff;`;
const dangerColor = `#bf4342;`;
const successColor = `#28a745;`;
const fontsize = `19px`;
const fontstyle = `italic`;
const titleFontsize = `22px`;
const fontweight = 700;
const borderradius = `10px`;
const opacity = 0.8;
const primaryDark = `#1A1A1A`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const ContainerApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export interface errorContainerProps {
  text: string;
}

export const ErrorContainer = styled.div`
  overflow: hidden;
  height: ${(props: errorContainerProps) =>
    props.text?.length ? "40px" : "0px"};
  transition: height 0.2s;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Text = styled.p`
  font-size: 15px;
  color: ${dangerColor};
`;
