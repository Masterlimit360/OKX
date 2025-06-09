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
      })}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'OKX',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="markets"
      options={{
        title: 'Markets',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="bar-chart-outline" size={size} color={color} />
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
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color, size }) => (
        <Feather name="compass" size={size} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="assets"
      options={{
        title: 'Assets',
        tabBarIcon: ({ color, size }) => (
        <Ionicons name="wallet-outline" size={size} color={color} />
        ),
      }}
      />
    </Tabs>
  );
}
