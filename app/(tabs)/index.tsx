import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <ScrollView className="flex-1 bg-slate-50">
      {/* Header Section */}
      <View className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 pt-12">
        <Text className="text-3xl font-bold text-white mb-2">
          🎉 NativeWind Test
        </Text>
        <Text className="text-blue-100 text-lg">
          Testing Tailwind CSS classes in React Native
        </Text>
      </View>

      {/* Content Container */}
      <View className="p-4 space-y-4">
        
        {/* Colors & Typography */}
        <View className="bg-white rounded-xl p-4 shadow-md">
          <Text className="text-xl font-bold text-gray-800 mb-3">Colors & Typography</Text>
          <Text className="text-red-500 text-lg font-semibold">Red Text</Text>
          <Text className="text-green-600 text-base font-medium">Green Text</Text>
          <Text className="text-blue-700 text-sm font-normal">Blue Text</Text>
          <Text className="text-purple-800 text-xs font-light">Purple Text</Text>
        </View>

        {/* Spacing & Layout */}
        <View className="bg-white rounded-xl p-4 shadow-md">
          <Text className="text-xl font-bold text-gray-800 mb-3">Spacing & Layout</Text>
          <View className="flex-row justify-between mb-3">
            <View className="bg-red-200 p-3 rounded-lg flex-1 mr-2">
              <Text className="text-red-800 text-center">Flex 1</Text>
            </View>
            <View className="bg-blue-200 p-3 rounded-lg flex-1 ml-2">
              <Text className="text-blue-800 text-center">Flex 1</Text>
            </View>
          </View>
          <View className="bg-green-100 p-4 rounded-lg">
            <Text className="text-green-800 text-center">Full Width</Text>
          </View>
        </View>

        {/* Interactive Elements */}
        <View className="bg-white rounded-xl p-4 shadow-md">
          <Text className="text-xl font-bold text-gray-800 mb-3">Interactive Elements</Text>
          
          {/* Counter */}
          <View className="flex-row items-center justify-center mb-4">
            <TouchableOpacity 
              className="bg-red-500 rounded-full w-10 h-10 items-center justify-center mr-4 active:bg-red-600"
              onPress={() => setCounter(counter - 1)}
            >
              <Text className="text-white font-bold text-lg">-</Text>
            </TouchableOpacity>
            
            <Text className="text-2xl font-bold text-gray-800 min-w-12 text-center">
              {counter}
            </Text>
            
            <TouchableOpacity 
              className="bg-green-500 rounded-full w-10 h-10 items-center justify-center ml-4 active:bg-green-600"
              onPress={() => setCounter(counter + 1)}
            >
              <Text className="text-white font-bold text-lg">+</Text>
            </TouchableOpacity>
          </View>

          {/* Text Input */}
          <TextInput
            className="border-2 border-gray-300 rounded-lg p-3 mb-3 bg-gray-50 focus:border-blue-500"
            placeholder="Type something..."
            value={inputText}
            onChangeText={setInputText}
          />

          {/* Button */}
          <TouchableOpacity 
            className="bg-blue-500 p-4 rounded-lg active:bg-blue-600"
            onPress={() => Alert.alert('Button Pressed!', `You typed: ${inputText}`)}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Press Me!
            </Text>
          </TouchableOpacity>
        </View>

        {/* Border & Shadow Examples */}
        <View className="bg-white rounded-xl p-4 shadow-md">
          <Text className="text-xl font-bold text-gray-800 mb-3">Borders & Shadows</Text>
          <View className="space-y-3">
            <View className="border-2 border-dashed border-blue-400 p-3 rounded">
              <Text className="text-blue-600 text-center">Dashed Border</Text>
            </View>
            <View className="border-l-4 border-green-500 bg-green-50 p-3 rounded-r">
              <Text className="text-green-700">Left Border Accent</Text>
            </View>
            <View className="bg-purple-100 border border-purple-300 p-3 rounded-lg shadow-lg">
              <Text className="text-purple-800 text-center">Purple with Shadow</Text>
            </View>
          </View>
        </View>

        {/* Status Indicators */}
        <View className="bg-white rounded-xl p-4 shadow-md">
          <Text className="text-xl font-bold text-gray-800 mb-3">Status Indicators</Text>
          <View className="space-y-2">
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-green-500 rounded-full mr-3" />
              <Text className="text-gray-700">Online - Everything working!</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
              <Text className="text-gray-700">Warning - Check configuration</Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-3 h-3 bg-red-500 rounded-full mr-3" />
              <Text className="text-gray-700">Error</Text>
            </View>
          </View>
        </View>

        {/* Success Message */}
        <View className="bg-green-100 border border-green-400 rounded-xl p-4 mb-8">
          <Text className="text-green-800 font-semibold text-center text-lg">
            ✅ NativeWind is working perfectly! 
          </Text>
          <Text className="text-green-700 text-center mt-1">
            All Tailwind classes are rendering correctly
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}