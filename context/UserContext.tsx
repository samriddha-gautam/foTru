import React, { createContext, ReactNode, useEffect, useState } from "react";
import { User, UserContextType } from "@/types/usertype";
import { db } from "@/database/db";
import { Alert } from "react-native";

export const UserContext = createContext<UserContextType>({
  user: undefined,
  createUser: async () => {},
  logout:()=>{},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    loadUser();
  },[]);
  const loadUser = async () => {
    try {
      const result = await db.getAllAsync<User>(
        " SELECT id,name,username FROM users LIMIT 1"
      );
      if (result.length > 0) {
        setUser(result[0]);
      }
    } catch (error) {
      Alert.alert("error loading user");
      throw error;
    }
  };
  const createUser = async ({ name, username }: Omit<User, "id">) => {
    if (!name.trim() || !username.trim()) {
      Alert.alert("Name and/or username cannot be empty");
      return;
    }
    try {
      const id =
        Date.now().toString() + Math.random().toString(36).substring(2, 9);

      await db.runAsync("INSERT INTO users (id,name,username) VALUES (?,?,?)", [
        id,
        name,
        username,
      ]);
      setUser({ id, name, username });
    } catch (error) {
      Alert.alert("Failed to create user");
      throw error;
    }
  };

  const logout =()=>{
    setUser(undefined)
  }
  const value = {
    user,
    createUser,
    logout
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
