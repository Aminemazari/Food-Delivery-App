import { View,Image } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
export default function WelcomeScreen() {
  const router = useRouter();
  useEffect(()=>{
    const timer = setTimeout(()=>{
      router.replace
    })
})
  return(
    
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <Image source={require('../assets/images/Ellipse 1005.png')} style={{position: 'absolute',top :"0",left:"0"}}/>
      <Image source={require('../assets/images/Logo.png')}/>
      <Image source={require('../assets/images/Ellipse 1006.png')} style={{position: 'absolute',bottom :"0",right:"0"}}/>

    </View>
  )
}
