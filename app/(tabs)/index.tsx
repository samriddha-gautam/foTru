import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RoutineCards from "@/components/ui/RoutineCards";
import { useRoutines } from "@/hooks/useRoutines";

export default function index() {
  const { routines } = useRoutines();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Routines</Text>
        <Text style={styles.headerSubtitle}>
          {routines.length} {routines.length === 1 ? 'routine' : 'routines'}
        </Text>
      </View>
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {routines.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No routines yet</Text>
            <Text style={styles.emptyStateSubtext}>
              Add your first routine to get started
            </Text>
          </View>
        ) : (
          <RoutineCards />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFE",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(99, 64, 194, 0.1)",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2D1B4E",
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#8B7BA8",
    fontWeight: "500",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
    padding: 40,
  },
  emptyStateText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2D1B4E",
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 15,
    color: "#8B7BA8",
    textAlign: "center",
    fontWeight: "500",
  },
});