import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "@/components/ui/Login";
import { UserContext } from "@/context/UserContext";
import UserDashboard from "@/components/ui/UserDashboard";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      {!user ? (
        <View style={styles.content}>
          <Login />
        </View>
      ) : (
        <UserDashboard />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFE",
  },
  content: {
    flex: 1,
  },
});