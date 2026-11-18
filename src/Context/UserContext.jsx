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

  const logoutUser = () => {
    localStorage.removeItem("LoginUser");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}
