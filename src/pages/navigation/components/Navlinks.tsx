import { FC, memo } from "react";
import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "../style/styles";
import { routesData, routesDataType } from "../../../routes/routes";

export interface NavbarProps {}

const Navlinks: FC<NavbarProps> = (): JSX.Element => {
  const links = routesData.map((el: routesDataType) => {
    return (
      <NavbarLink className="nav-link active" to={el.path}>
        {el.name}
      </NavbarLink>
    );
  });

  return (
    <NavbarContainer>
      <NavbarLinkContainer>{links}</NavbarLinkContainer>
    </NavbarContainer>
  );
};

export default memo(Navlinks);
