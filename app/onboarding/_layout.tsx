import { Stack } from 'expo-router';



export default function Layout() {

  return (
       <Stack>
           <Stack.Screen name="index" options={{ headerShown: false }} />
           <Stack.Screen name="steptwo" options={{ headerShown: false }} />
            <Stack.Screen name="steptree" options={{ headerShown: false }} />
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
        </Stack>
     
  );
}
