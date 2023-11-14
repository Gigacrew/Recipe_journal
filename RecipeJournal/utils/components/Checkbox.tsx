import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handlePress = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <Icon name="checkmark" size={24} color="white" />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: 16,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "#7A2626",
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#7A2626",
  },
});

export default Checkbox;
