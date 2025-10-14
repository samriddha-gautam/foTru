import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, View } from "react-native";
import Button from "./Button";

interface TimePickerProps {
  time: Date;
  onTimeChange: (time: Date) => void;
}

const TimePicker = ({
  time,
  onTimeChange,
}: TimePickerProps) => {
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    if (Platform.OS === "android") {
      setShow(false);
    }
    if (selectedTime) {
      onTimeChange(selectedTime);
    }
  };

  return (
    <View>
      <Button title="Pick Time" onPress={() => setShow(true)} />
      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          display="clock"
          onChange={onChange}
          design="material"
        />
      )}
    </View>
  );
};

export default TimePicker;
