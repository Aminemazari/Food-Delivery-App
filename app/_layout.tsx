import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import {
  PaperProvider,
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {
  ThemeProvider,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  Sen: require('../assets/fonts/Sen-Regular.ttf'),  });

  if (!loaded) return null;

 const lightTheme = {
  ...PaperLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    primary: '#ef9f27',
    secondary: '#7a869a',
  },
  fonts: {
    // Default variants (required by Paper)
    regular: {
      fontFamily: 'Poppins',
      fontWeight: '700',
    },
    medium: {
      fontFamily: 'Poppins',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Sen',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Sen',
      fontWeight: '200',
    },
    // Add missing variants (used by Button, Text, etc.)
    labelLarge: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    labelMedium: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
    labelSmall: {
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
    },
  },
};
  const darkTheme = {
    ...PaperDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      
      background: '#121212',
      
      
    },
  };

  const paperTheme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const navigationTheme = colorScheme === 'dark' ? NavigationDarkTheme : NavigationLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={navigationTheme}>
        <Stack initialRouteName='welcome'>
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
