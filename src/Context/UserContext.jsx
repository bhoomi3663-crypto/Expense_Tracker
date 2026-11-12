import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("LoginUser") || "null"),
  );

  const updateUser = (updatedUser) => {
    localStorage.setItem("LoginUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
