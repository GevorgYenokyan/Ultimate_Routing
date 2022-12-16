import { FC } from "react";
import Navigation from "./pages/navigation/navigation";
import { useRoutes } from "react-router-dom";
import { routesData } from "./routes/routes";
import "antd/dist/antd.variable.min.css";
import "./App.css";
import { ContainerApp } from "./styles/styled";

const App: FC = () => (
  <ContainerApp>
    <Navigation />
    {useRoutes(routesData)}
  </ContainerApp>
);

export default App;
