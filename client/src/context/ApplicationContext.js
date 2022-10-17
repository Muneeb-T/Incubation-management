// @ts-nocheck
import { createContext, useState } from "react";
export const ApplicationContext = createContext(null);
export function ApplicationViewContext({ children }) {
  const [application, setApplication] = useState(null);
  return (
    <ApplicationContext.Provider value={{ application, setApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
}
