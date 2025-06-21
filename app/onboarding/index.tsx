import PrimaryButton from "@/components/ui/primaryButon";
import StepIndicator from "@/components/ui/stepIndicator";
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
export default function Onboarding() {
  const router = useRouter();
  const handleClick = ()=>{ 
    router.push('/onboarding/steptwo') 
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Group.png")} style={styles.imagePlaceholder} />
      
      <Text style={styles.title}>Diverse & sparkling food</Text>
      
      <Text style={styles.description}>
        We use the best local ingredients to create fresh and delicious food and drinks.
      </Text>
      
      <StepIndicator currentStep={0} totalSteps={3} />
      
      <View style={styles.buttonContainer}>
        <PrimaryButton text={"Next"} onPress={handleClick}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  imagePlaceholder: {
    borderRadius: 16,
    marginBottom: 34
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
    color: '#666'
  },
  buttonContainer: {
    flexDirection: 'column',
    gap: 12,
    marginTop: 24
  },
  primaryButton: {
    
    backgroundColor: '#FF7622'
  },
  secondaryButton: {
    flex: 1,

    
  }
});