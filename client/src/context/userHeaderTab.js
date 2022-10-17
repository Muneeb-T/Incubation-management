// @ts-nocheck
import { createContext, useState } from "react";
export const UserNavTabContext = createContext(null);
export function UserNavTab({ children }) {
  const [navTabValue, setNavTabValue] = useState(0);
  return (
    <UserNavTabContext.Provider value={{ navTabValue, setNavTabValue }}>
      {children}
    </UserNavTabContext.Provider>
  );
}
