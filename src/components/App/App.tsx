import React, {useEffect} from 'react';
import Header from "../Header";
import AppRouter from "../AppRouter";
import {Container} from "./styles";
import {useActions} from "../../hooks/useActions";
import {IUser} from "../../models/IUser";

function App() {
  const { setUser, setAuth } = useActions()

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser)
      setAuth(true);
    }
  }, [])

  return (
    <div>
      <Header />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
