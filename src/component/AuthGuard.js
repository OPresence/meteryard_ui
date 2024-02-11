import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth";

export default function AuthGuard() {
  const { children } = props;
  const auth = useContext(AuthContext);
  if (!auth.userLoggedIn) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
}
