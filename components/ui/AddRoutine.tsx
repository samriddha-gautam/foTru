import { useRoutines } from "@/hooks/useRoutines";
import { Frequency } from "@/types/routinetype";
import React, { useEffect, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TimePicker from "../common/TimePicker";
import Button from "../common/Button";

const AddRoutine = () => {
  const { addRoutine } = useRoutines();
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<Frequency>("everyday");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState(new Date());
  const [daysOfWeek, setDaysOfWeek] = useState<number[]>([]);
  const [enabled, setEnabled] = useState<boolean>(false);
  
  const [slideAnim] = useState(new Animated.Value(0));

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const frequencies: Frequency[] = ["everyday", "custom"];

  useEffect(() => {
    if (frequency === "custom") {
      Animated.timing(slideAnim, {
        toValue: 3,
        duration: 800,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start();
    }
  }, [frequency]);



  const handleSubmit = () => {
    addRoutine({
      name,
      schedule: {
        frequency,
        time,
        daysOfWeek,
        enabled: true,
      },
      description,
    });
  };

  const toggleFrequency = (newFrequency: Frequency) => {
    setFrequency(newFrequency);
    if (newFrequency === "everyday") {
      setDaysOfWeek([0, 1, 2, 3, 4, 5, 6]);
    } else {
      setDaysOfWeek([]);
    }
  };

  const toggleDays = (index: number) => {
    setDaysOfWeek(
      daysOfWeek.includes(index)
        ? daysOfWeek.filter((day) => day !== index)
        : [...daysOfWeek, index]
    );
  };

  const toggleStatus = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create New Routine</Text>
        </View>

        {/* Routine Name Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Routine Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g., Morning Meditation"
            placeholderTextColor="rgba(99, 64, 194, 0.35)"
            style={styles.input}
          />
        </View>

        {/* Description Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="What does this routine involve?"
            placeholderTextColor="rgba(99, 64, 194, 0.35)"
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={3}
          />
        </View>

        {/* Frequency Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Frequency</Text>
          <View style={styles.frequencyContainer}>
            {frequencies.map((freq) => (
              <TouchableOpacity
                key={freq}
                onPress={() => toggleFrequency(freq)}
                style={[
                  styles.frequencyButton,
                  frequency === freq && styles.frequencyButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.frequencyText,
                    frequency === freq && styles.frequencyTextActive,
                  ]}
                >
                  {freq.charAt(0).toUpperCase() + freq.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Days Selection */}
        {frequency === "custom" && (
          <Animated.View
            style={[
              styles.section,
              {
                opacity: slideAnim,
                maxHeight: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ]}
          >
            <Text style={styles.label}>Select Days</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.daysContainer}
            >
              {days.map((day, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleDays(index)}
                  style={[
                    styles.dayButton,
                    daysOfWeek.includes(index) && styles.dayButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.dayText,
                      daysOfWeek.includes(index) && styles.dayTextActive,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}

        {/* Time Picker Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Time</Text>
          <View style={styles.timePickerContainer}>
            <TimePicker
              time={time}
              onTimeChange={setTime}
            />
            <View style={styles.selectedTimeContainer}>
              <Text style={styles.selectedTimeLabel}>Selected time:</Text>
              <Text style={styles.selectedTime}>
                {time.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </Text>
            </View>
          </View>
        </View>

        {/* Enable Switch */}
        <View style={styles.section}>
          <View style={styles.switchContainer}>
            <View>
              <Text style={styles.switchLabel}>Enable Notification</Text>
            </View>
            <Switch
              value={enabled}
              onValueChange={setEnabled}
              trackColor={{ false: "#E8E0F5", true: "#9B7FD9" }}
              thumbColor={enabled ? "#6340C2" : "#F5F3F8"}
              ios_backgroundColor="#E8E0F5"
            />
          </View>
        </View>

        {/* Submit Button */}
        <View style={styles.buttonContainer}>
          <Button title="Add Routine" onPress={() => handleSubmit()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddRoutine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFE",
  },
  formContainer: {
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
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  section: {
    marginBottom: 28,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6340C2",
    marginBottom: 10,
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
    fontWeight: "400",
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: "top",
    paddingTop: 14,
  },
  frequencyContainer: {
    flexDirection: "row",
    gap: 12,
  },
  frequencyButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
    alignItems: "center",
  },
  frequencyButtonActive: {
    backgroundColor: "#6340C2",
    borderColor: "#6340C2",
  },
  frequencyText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8B7BA8",
  },
  frequencyTextActive: {
    color: "#FFFFFF",
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  dayButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  dayButtonActive: {
    backgroundColor: "#6340C2",
    borderColor: "#6340C2",
  },
  dayText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8B7BA8",
  },
  dayTextActive: {
    color: "#FFFFFF",
  },
  timePickerContainer: {
    gap: 16,
  },
  selectedTimeContainer: {
    backgroundColor: "#F5F1FC",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  selectedTimeLabel: {
    fontSize: 14,
    color: "#8B7BA8",
    fontWeight: "500",
  },
  selectedTime: {
    fontSize: 16,
    color: "#6340C2",
    fontWeight: "700",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "rgba(99, 64, 194, 0.15)",
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D1B4E",
    marginBottom: 4,
  },
  buttonContainer: {
    marginTop: 12,
  },
});