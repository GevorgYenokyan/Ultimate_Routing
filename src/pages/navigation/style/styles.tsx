import styled from "styled-components";
import { PageText as NavText } from "../../../styles/PageText";
import { Link } from "react-router-dom";
import { PageItemWrapper as NavItemWrapper } from "../../../styles/ItemWrapper";

export const Text = styled(NavText)`
  color: ${(props) => (props.color ? props.color : "#131111")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : ".9em")};
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  padding: 0.1em;
  cursor: pointer;
  border: none;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 0.2em;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: purple;
  display: flex;
  flex-direction: column;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
