import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperLightTheme,
  PaperProvider,
} from 'react-native-paper';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  ThemeProvider,
} from '@react-navigation/native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  DMSans : require("../assets/fonts/DMSans-Regular.ttf"),
  Sen: require('../assets/fonts/Sen-Regular.ttf'),  });

  if (!loaded) return null;

 const lightTheme = {
  ...PaperLightTheme, // Keep all defaults
  colors: {
    ...PaperLightTheme.colors, // Keep default colors
    primary: '#ef9f27', // Only override primary
    secondary: '#7a869a', // And secondary if needed
  },
  fonts: {
    ...PaperLightTheme.fonts, // Keep all default font variants
    regular: {
      fontFamily: 'DMSans', // Only override default regular
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'DMSans', // Only override medium
      fontWeight: '500',
    },
  },
};

const darkTheme = {
  ...PaperDarkTheme, // Keep all dark defaults
  colors: {
    ...PaperDarkTheme.colors,
    primary: '#ef9f27', // Same primary in dark mode
  },
  // No need to repeat fonts - they'll inherit from lightTheme
};

  const paperTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const navigationTheme = colorScheme === 'dark' ? NavigationDarkTheme : NavigationLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={navigationTheme}>
        <Stack initialRouteName="welcome" screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome"  />
          <Stack.Screen name="address"/>
          <Stack.Screen name="onboarding"  />
           <Stack.Screen name="signup"  />
           <Stack.Screen name="signin"  />
          <Stack.Screen name="(tabs)"  />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
