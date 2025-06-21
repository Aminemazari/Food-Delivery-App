import StepIndicator from "@/components/ui/stepIndicator";
import { Text, Image, View, StyleSheet } from "react-native";
import * as React from 'react';
import { Button } from "react-native-paper";
import PrimaryButton from "@/components/ui/primaryButon";
import { useRouter } from 'expo-router'; 

export default function Onboarding() {
  const router = useRouter();
    const handleClick = ()=>{ 
    router.push('../signin') 
  }
  
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Group2.png")} style={styles.imagePlaceholder} />
      
      <Text style={styles.title}>+24K Restaurants</Text>
      
      <Text style={styles.description}>
        Easily find your favorite food and have it delivered in record time.
      </Text>
      
      <StepIndicator currentStep={2} totalSteps={3} />
      
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