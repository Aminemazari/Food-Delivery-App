import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';
import theme from "../theme/theme";
export default function Onboarding() {
  const router = useRouter();
  const [location, setLocation] = React.useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const getLocation = async () =>{
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
    console.log(loc)
    router.push("/(tabs)");
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/location.png")} style={styles.imagePlaceholder} />
      
      <Text style={styles.title}>Find Nearby Restaurants</Text>
      
      <Text style={styles.description}>
        Enter your location or allow access to your location to find restaurants near you.
      </Text>
      
      
      <View style={styles.buttonContainer}>
        <Button  mode="contained" onPress={getLocation}
                textColor={theme.colors.neutral["800"]}
             
                style={{backgroundColor:theme.colors.neutral["42_card_list"],padding:4,width:300}}
                 contentStyle={{
                      flexDirection: 'row',
                      justifyContent: 'center', // 👈 Push icon and text to the start
                      alignItems: 'center',
                      paddingHorizontal: 16,
                      gap: 18,
                      height: 50,
                    
                    }}
                    
                    labelStyle={{ marginRight:8 , fontSize: 16, }}>
                    Use current location
            </Button>
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