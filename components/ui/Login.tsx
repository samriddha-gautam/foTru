import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";

const Login = () => {
  const { createUser } = useUser();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");


  const handleSubmit = () => {
    createUser({
      name,
      username,
    });
  };
  return (
    <ScrollView>
      <View>
        <Text>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter Your Name"
        />
      </View>
      <View>
        <Text>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter username"
        />
      </View>
    </ScrollView>
  );
};

export default Login;