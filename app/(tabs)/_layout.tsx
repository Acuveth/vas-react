import React from 'react';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3B82F6', // blue-500
        tabBarInactiveTintColor: '#6B7280', // gray-500
        tabBarStyle: {
          backgroundColor: '#F8FAFC', // slate-50
          borderTopColor: '#E2E8F0', // slate-200
          borderTopWidth: 1,
        },
        headerStyle: {
          backgroundColor: '#F8FAFC', // slate-50
          borderBottomColor: '#E2E8F0', // slate-200
          borderBottomWidth: 1,
        },
        headerTintColor: '#1E293B', // slate-800
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <View className="w-6 h-6 rounded-full bg-blue-500" style={{ backgroundColor: color }} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <View className="w-6 h-6 rounded-full bg-green-500" style={{ backgroundColor: color }} />
          ),
        }}
      />
    </Tabs>
  );
}