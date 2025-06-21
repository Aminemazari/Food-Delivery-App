import { useRouter } from "expo-router";
import {Image, View, Text, StyleSheet} from "react-native";
export default function Signin() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/onboarding');
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Cook.png")} style={styles.imagePlaceholder} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.description}>
        Sign in to continue enjoying your favorite food and drinks.
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton text={"Sign In"} onPress={handleClick} />
      </View>      
    </View>
  );
}
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