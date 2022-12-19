import { FC, useEffect } from "react";
import { memo } from "react";
import Navlinks from "./components/Navlinks";
import { Container } from "./style/styles";
import { addList } from "../../redux/features/usersList/usersListSlise";
import { useAppDispatch, useAppSelector } from "../../redux/features/reduxHuks";
import { selectUsersList } from "../../redux/features/usersList/selectors";

const Navigation: FC = (): JSX.Element => {
  const list = useAppSelector(selectUsersList);
  const dispach = useAppDispatch();

  useEffect(() => {
    dispach(addList([2, 5, 2, 7]));
  }, []);

  return (
    <Container>
      <Navlinks />
    </Container>
  );
};

export default memo(Navigation);
