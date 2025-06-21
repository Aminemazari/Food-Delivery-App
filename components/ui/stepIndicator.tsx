import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StepIndicatorProps {
  currentStep: number;           // 0-based or 1-based — you choose
  totalSteps: number;
  activeColor?: string;          // Optional: active step color
  inactiveColor?: string;        // Optional: inactive step color
  size?: number;                 // Optional: dot size
}

export default function StepIndicator({
  currentStep,
  totalSteps,
  activeColor = '#FF7622',
  inactiveColor = '#FFE1CE',
  size = 14,
}: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: index === currentStep ? activeColor : inactiveColor,
            marginHorizontal: size / 3,
          }}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
});
