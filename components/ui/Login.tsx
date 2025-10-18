import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@/hooks/useUser";
import Button from "../common/Button";

const Login = () => {
  const { createUser } = useUser();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");


  const handleSubmit = () => {
    console.log(username,name)
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
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
    </ScrollView>
  );
};

export default Login;
