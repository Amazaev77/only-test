import React from 'react';
import { Title, Email } from './styles';
import Button from "../../components/Button";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const ProfilePage = () => {
  const { logout } = useActions();

  const handleLogout = () => {
    logout()
  }

  const username = useTypedSelector(
    state => state.auth.user?.username
  ) || localStorage.getItem('username')

  return (
    <div>
      <Title>
        Здравствуйте, <Email>{username}</Email>
      </Title>
      <Button
        color="black"
        background="#F5F5F5"
        onClick={handleLogout}
        maxWidth={200}
        margin="50px auto 0"
      >
        Выйти
      </Button>
    </div>
  );
};

export default ProfilePage;
