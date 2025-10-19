import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useUser } from "@/hooks/useUser";
import Button from "../common/Button";

const Login = () => {
  const { createUser } = useUser();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async () => {
    await createUser({ name, username });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Create your account</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>NAME</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter Your Name"
            style={styles.input}
            placeholderTextColor="#8B7BA8"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>USERNAME</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
            style={styles.input}
            placeholderTextColor="#8B7BA8"
          />
        </View>

        <Button title="Create Account" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFE",
  },
  content: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2D1B4E",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#8B7BA8",
    fontWeight: "500",
  },
  form: {
    gap: 24,
  },
  inputGroup: {
    gap: 10,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6340C2",
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#2D1B4E",
  },
});

export default Login;
