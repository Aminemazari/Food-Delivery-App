import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import theme from '../theme/theme';
import { Pressable } from 'react-native';
export default function TabLayout() {

  return (
<Tabs
  screenOptions={{
    headerShown: false,
    tabBarInactiveTintColor: theme.colors.neutral["50"],
    tabBarActiveTintColor: theme.colors.red["300"],
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: theme.colors.neutral["42_card_list"],
      borderTopWidth: 0,
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 108,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      shadowColor: theme.colors.neutral["800"],
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 5,
    },
    tabBarItemStyle: {
      justifyContent: 'center',  
      alignItems: 'center',
    },
    tabBarIconStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  }}
>
      <Tabs.Screen 
        name="index"
        options={{
          tabBarIcon: ({ color ,size}) => (
             <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
      />
       <Tabs.Screen 
        name="explore"
        options={{
          tabBarIcon: ({ color ,size}) => (
              <MaterialIcons name="explore" size={30} color={color} />          ),
        }}
      />
       <Tabs.Screen 
        name="orders"
        options={{
          tabBarIcon: ({ color ,size}) => (
          <FontAwesome name="bookmark" size={30} color={color} />          ),
        }}
      />
       <Tabs.Screen 
        name="profile"
        options={{
          tabBarIcon: ({ color ,size}) => (
          <FontAwesome name="user" size={30} color={color} />          ),
        }}
      />
   </Tabs>    
  );
}
