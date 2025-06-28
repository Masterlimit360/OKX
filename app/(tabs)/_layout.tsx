import { Feather, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#888',
      tabBarStyle: {
        backgroundColor: '#111',
        borderTopWidth: 0,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
      },
      headerShown: false,
      })}
    >
      <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="wallet" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="token"
      options={{
        title: 'Tokens',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="cash" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="trade"
      options={{
        title: '',
        tabBarIcon: ({ color, size }) => (
        <View
          style={{
          backgroundColor: '#fff',
          borderRadius: 32,
          padding: 8,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 6,
          }}
        >
          <Ionicons name="swap-horizontal" size={32} color="#111" />
        </View>
        ),
        tabBarLabel: () => null,
      }}
      />
      <Tabs.Screen
      name="defi"
      options={{
        title: 'Defi',
        tabBarIcon: ({ color, size }) => (
        <Feather name="compass" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="discover"
      options={{
        title: 'Discover',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="telescope" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  );
}
