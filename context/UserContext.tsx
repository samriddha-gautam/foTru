import React, { createContext, ReactNode, useState } from "react";
import { User, UserContextType } from "@/types/usertype";

export const UserContext = createContext<UserContextType>({
  user: undefined,
  createUser: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>();

  const createUser = ({
    name,
    username,
  }: Omit<User, "id" | "createdAt">) => {
    const newUser: User = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name,
      username,
      createdAt: Date.now().toString(),
    };
    setUser(newUser);
  };
  const value = {
    user,
    createUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
