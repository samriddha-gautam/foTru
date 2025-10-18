import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "@/components/ui/Login";
import Button from "@/components/common/Button";
import { UserContext } from "@/context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  // Show login if no user
  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Login />
        </View>
      </SafeAreaView>
    );
  }

  // Show user dashboard when logged in
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user.name.charAt(0).toUpperCase()}
              </Text>
            </View>
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userUsername}>@{user.username}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ACCOUNT DETAILS</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>{user.name}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Username</Text>
              <Text style={styles.infoValue}>@{user.username}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ACTIONS</Text>

          <View style={styles.buttonSpacing}>
            <Button title="Edit Profile" onPress={() => {}} />
          </View>

          <TouchableOpacity
            style={[styles.actionButton, styles.actionButtonDanger]}
          >
            <Text
              style={[styles.actionButtonText, styles.actionButtonTextDanger]}
            >
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(99, 64, 194, 0.1)",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2D1B4E",
    letterSpacing: -0.5,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    marginBottom: 28,
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
    alignItems: "center",
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#6340C2",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  userInfo: {
    alignItems: "center",
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2D1B4E",
    marginBottom: 4,
  },
  userUsername: {
    fontSize: 16,
    color: "#8B7BA8",
    fontWeight: "500",
  },
  section: {
    marginBottom: 28,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6340C2",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 15,
    color: "#8B7BA8",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 15,
    color: "#2D1B4E",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(99, 64, 194, 0.1)",
  },
  buttonSpacing: {
    marginBottom: 12,
  },
  actionButton: {
    backgroundColor: "#6340C2",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: "#6340C2",
  },
  actionButtonDanger: {
    backgroundColor: "#FFFFFF",
    borderColor: "rgba(220, 38, 38, 0.3)",
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  actionButtonTextDanger: {
    color: "#DC2626",
  },
});
