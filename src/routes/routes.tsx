import { MenuUnfoldOutlined } from "@ant-design/icons";
import Registr from "../pages/registrPage/registr";
import Login from "../pages/loginPage/Login";
import Users from "../pages/users/Users";
import VirtualScrollList from "../pages/VirtualScroll/VirtualScrollList";

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

  {
    name: "Users",
    path: "/users",
    element: <Users />,
    icon: <MenuUnfoldOutlined />,
  },

  {
    name: "VirtualScrollList",
    path: "/virtualScrollList",
    element: <VirtualScrollList />,
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
