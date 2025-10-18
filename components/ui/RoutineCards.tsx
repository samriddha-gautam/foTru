import { useRoutines } from "@/hooks/useRoutines";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../common/Button";

const Cards = () => {
  const { routines } = useRoutines();

  return (
    <SafeAreaView>
      <View>
        {routines.map((routine) => (
          <View style={styles.card} key={routine.id}>
            <Text style={styles.title}>{routine.name}</Text>
            <Text>{routine.description}</Text>
            
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
  },
  description: {
    fontSize: 16,
    color: "#9e5af7ff",
    marginBottom: 20,
  },
});

export default Cards;
