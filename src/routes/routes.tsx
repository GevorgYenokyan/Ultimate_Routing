import { MenuUnfoldOutlined } from "@ant-design/icons";
import Registr from "../pages/registrPage/registr";
import Login from "../pages/loginPage/Login";
import { RouteObject } from "react-router-dom";

export interface routesDataType {
  name: string;
  path: string;
  element: any;
  icon: any;
}

export const routesData: routesDataType[] = [
  {
    name: "Registration",
    path: "/",
    element: <Registr />,
    icon: <MenuUnfoldOutlined />,
  },

  {
    name: "Login",
    path: "/login",
    element: <Login />,
    icon: <MenuUnfoldOutlined />,
  },

  // {

  //   name: "two",
  //   path: "/",
  //   element: (
  //     <PrivateRoute>
  //       <Layout />
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {

  //       name: "two",
  //       path: "page2",
  //       element: <PageTwo />,
  //       icon: <MenuUnfoldOutlined />,
  //     },
  //     {
  //       // private: token,
  //       name: "three",
  //       path: "page3",
  //       element: <PageThree />,
  //       icon: <MenuUnfoldOutlined />,
  //     },
  //   ],

  // },
];
