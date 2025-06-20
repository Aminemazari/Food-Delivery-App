import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
export default function HomeScreen() {
 

  return (
  <>
    <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')} textColor="#fff">
    Press me
  </Button>
  </>
   
  );
}

const styles = StyleSheet.create({
  input: {

  },
});
