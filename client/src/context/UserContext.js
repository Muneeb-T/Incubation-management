// @ts-nocheck
import { createContext, useState } from "react";
export const EditUserContext = createContext(null);
export function User({ children }) {
  const [userDetails, setUserDetails] = useState();
  return (
    <EditUserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </EditUserContext.Provider>
  );
}


