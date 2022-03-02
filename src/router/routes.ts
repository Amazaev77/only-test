import LoginPage from "../pages/Login";
import React from "react";
import ProfilePage from "../pages/Profile";

interface IRoute {
  path: '/login' | '/profile'
  exact?: boolean,
  component: React.ComponentType
}

export const publicRoutes: IRoute[] = [
  {path: '/login', exact: true, component: LoginPage}
]

export const privateRoutes: IRoute[] = [
  {path: '/profile', exact: true, component: ProfilePage}
]
