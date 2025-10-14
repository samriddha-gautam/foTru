import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Cards from "@/components/ui/RoutineCards";
import AddRoutine from "@/components/ui/AddRoutine";
import { useRoutines } from "@/hooks/useRoutines";
import RoutineCards from "@/components/ui/RoutineCards";

export default function index() {
  const { routines } = useRoutines();
  const press = ()=>{
    console.log(JSON.stringify(routines,null,2))
  }
  return (
    <SafeAreaView style={styles.container}>
      <RoutineCards/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 10,
  },
});