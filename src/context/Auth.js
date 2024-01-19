import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export default function Auth(props) {
  var nameValue = "monu";
  let data = {
    nameValue,
  };

  return (
    <div>
      <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
    </div>
  );
}
