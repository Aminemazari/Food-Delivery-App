import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet} from "react-native";

import theme from '@/app/theme/theme';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export default function CustomTextInput({
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}: CustomTextInputProps) {
  return (
    <TextInput
    style={styles.inputField}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      mode="flat"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      placeholderTextColor="gray"
      theme={{
        colors: {
          text: '#000',
        },
      }}
    />
  );
}
const styles = StyleSheet.create({
 inputField : { 
    height: 50,
    borderRadius: 8,
    width: 300,
    backgroundColor: theme.colors.neutral["42_card_list"],
    color:theme.colors.neutral["100"]  }
});
