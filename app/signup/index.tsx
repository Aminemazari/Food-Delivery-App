import CustomTextInput from "@/components/ui/CustomTextInput";
import PasswordInput from "@/components/ui/PasswordInput";
import PrimaryButton from "@/components/ui/primaryButon";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';
import theme from "../theme/theme";
export default function SignUp() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/address');
  }; 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Cook.png")} style={styles.imagePlaceholder} />
      <Text style={styles.title}>Hello! Create Account</Text>
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 4,
        marginBottom: 24,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 16, color: '#666' }}>Already have an account?</Text>

      <Pressable onPress={() => router.push('/signin')} hitSlop={12}>
        <Text
          style={{
            color: theme.colors.red['400'],
            fontSize: 16,
          }}
        >
          Sign In
        </Text>
      </Pressable>
    </View>
      <View style={styles.buttonContainer}>
        <CustomTextInput
                  placeholder="Your name"
                  value={username}
                  onChangeText={setUsername}
                  />
        <CustomTextInput
          placeholder="Username or Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          />
           <PasswordInput
              placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
              
            />        
        <PrimaryButton text={"Sign Up"} onPress={handleClick} />
        <Link href={"/signin"} style={{color:theme.colors.red["400"],alignSelf:"center"}}>Forgot Password?</Link>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10,marginTop:10}}>
           <View style={{backgroundColor:theme.colors.neutral["42_card_list"],width:130,height:2,justifyContent:"center"}}/>
            <Text>OR</Text>
           <View style={{backgroundColor:theme.colors.neutral["42_card_list"],width:130,height:2,justifyContent:"center"}}/>
        </View>
        <Button icon={()=>(<Image source={require("../../assets/images/Google - Logo.png")}></Image>)} mode="contained" onPress={() => console.log('Pressed')}
                textColor={theme.colors.neutral["800"]}  
                style={{backgroundColor:theme.colors.neutral["42_card_list"],padding:4}}
                 contentStyle={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start', // 👈 Push icon and text to the start
                      alignItems: 'center',
                      paddingHorizontal: 16,
                      gap: 18,
                      height: 50,
                    }}
                    labelStyle={{ marginRight:8 }}>
              Connect with Google
            </Button>
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
    alignItems:"center",
    justifyContent:"center",
    gap: 8,
    marginBottom: 24,
    paddingHorizontal: 20,
    color: '#666',
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

    
  },
  inputField : { 
    height: 50,
    borderRadius: 8,
    width: 300,
    backgroundColor: theme.colors.neutral["42_card_list"],
    color:theme.colors.neutral["100"]  }
});