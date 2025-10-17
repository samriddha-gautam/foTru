import { RoutineProvider } from "@/context/RoutineContext";
import { UserProvider } from "@/context/UserContext";
import { dbInit } from "@/database/db";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  useEffect(() => {
    initDB();
  }, []);

  const initDB = async () => {
    try {
      await dbInit;
      console.log("database ready");
    } catch (error) {
      console.log("errror initializing db", error);
    }
  };
  return (
    <UserProvider>
      <RoutineProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </RoutineProvider>
    </UserProvider>
  );
}
