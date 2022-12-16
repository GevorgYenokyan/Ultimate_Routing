import { FC, memo } from "react";

import { routesData, routesDataType } from "../../../routes/routes";

import {
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "../style/styles";

export interface NavbarProps {}

const Navlinks: FC<NavbarProps> = (): JSX.Element => {
  const links = routesData.map((el: routesDataType) => {
    const { name, path } = el;

    return (
      <NavbarLink className="nav-link active" to={path}>
        {name}
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
