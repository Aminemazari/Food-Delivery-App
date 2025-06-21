import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet} from "react-native";

import theme from '@/app/theme/theme';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';

}

export default function IconInput({
  placeholder,
  value,
  icon,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'default',
}: CustomTextInputProps) {
  return (
    <TextInput
    onSubmitEditing={onSubmitEditing}
    left={<TextInput.Icon icon={()=>(icon)} />}
    style={styles.inputField}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      mode="flat"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      placeholderTextColor={theme.colors.neutral["100"]}
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
    width: 345,
    backgroundColor: theme.colors.neutral["42_card_list"],
    color:theme.colors.neutral["100"]  }
});
