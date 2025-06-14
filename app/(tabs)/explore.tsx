import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  Switch
} from 'react-native';

export default function ExploreScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = ['Cards', 'Lists', 'Grids', 'Forms'];
  
  return (
    <ScrollView className={`flex-1 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header with Dark Mode Toggle */}
      <View className={`p-6 pt-12 ${darkMode ? 'bg-gray-800' : 'bg-blue-600'}`}>
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-bold text-white mb-1">Explore</Text>
            <Text className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              Advanced NativeWind Features
            </Text>
          </View>
          <View className="items-center">
            <Text className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              Dark Mode
            </Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#CBD5E0', true: '#4F46E5' }}
              thumbColor={darkMode ? '#F1F5F9' : '#FFFFFF'}
            />
          </View>
        </View>
      </View>

      {/* Tab Navigation */}
      <View className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-2">
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                className={`px-4 py-2 rounded-full ${
                  selectedTab === index
                    ? 'bg-blue-500'
                    : darkMode
                    ? 'bg-gray-700'
                    : 'bg-gray-200'
                }`}
                onPress={() => setSelectedTab(index)}
              >
                <Text className={`font-medium ${
                  selectedTab === index
                    ? 'text-white'
                    : darkMode
                    ? 'text-gray-300'
                    : 'text-gray-700'
                }`}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View className="p-4">
        {selectedTab === 0 && (
          // Cards Section
          <View className="space-y-4">
            <Text className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Card Components
            </Text>
            
            {/* Feature Card */}
            <View className={`rounded-2xl p-6 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <View className="flex-row items-center mb-4">
                <View className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center mr-4">
                  <Text className="text-white font-bold text-lg">🚀</Text>
                </View>
                <View className="flex-1">
                  <Text className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    Premium Feature
                  </Text>
                  <Text className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Unlock advanced capabilities
                  </Text>
                </View>
              </View>
              <Text className={`mb-4 leading-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Experience the full power of our platform with premium features designed to boost your productivity.
              </Text>
              <TouchableOpacity className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                <Text className="text-white text-center font-semibold">Get Started</Text>
              </TouchableOpacity>
            </View>

            {/* Stats Cards */}
            <View className="flex-row space-x-4">
              <View className={`flex-1 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <Text className="text-3xl font-bold text-green-500 mb-1">1.2K</Text>
                <Text className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Users</Text>
              </View>
              <View className={`flex-1 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <Text className="text-3xl font-bold text-blue-500 mb-1">4.8</Text>
                <Text className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rating</Text>
              </View>
              <View className={`flex-1 p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                <Text className="text-3xl font-bold text-purple-500 mb-1">99%</Text>
                <Text className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Uptime</Text>
              </View>
            </View>
          </View>
        )}

        {selectedTab === 1 && (
          // Lists Section
          <View className="space-y-4">
            <Text className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              List Components
            </Text>
            
            {['Inbox', 'Drafts', 'Sent', 'Trash', 'Archive'].map((item, index) => (
              <TouchableOpacity
                key={index}
                className={`flex-row items-center p-4 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}
              >
                <View className={`w-10 h-10 rounded-full items-center justify-center mr-4 ${
                  index === 0 ? 'bg-blue-100' :
                  index === 1 ? 'bg-yellow-100' :
                  index === 2 ? 'bg-green-100' :
                  index === 3 ? 'bg-red-100' : 'bg-purple-100'
                }`}>
                  <Text className="text-lg">
                    {index === 0 ? '📥' : index === 1 ? '📝' : index === 2 ? '📤' : index === 3 ? '🗑️' : '📦'}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {item}
                  </Text>
                  <Text className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {Math.floor(Math.random() * 50)} items
                  </Text>
                </View>
                <Text className="text-gray-400 text-2xl">›</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {selectedTab === 2 && (
          // Grids Section
          <View>
            <Text className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Grid Layouts
            </Text>
            
            <View className="flex-row flex-wrap -mx-2">
              {Array.from({ length: 6 }, (_, index) => (
                <View key={index} className="w-1/2 px-2 mb-4">
                  <TouchableOpacity 
                    className={`aspect-square rounded-2xl p-4 items-center justify-center ${
                      index % 6 === 0 ? 'bg-red-100' :
                      index % 6 === 1 ? 'bg-blue-100' :
                      index % 6 === 2 ? 'bg-green-100' :
                      index % 6 === 3 ? 'bg-yellow-100' :
                      index % 6 === 4 ? 'bg-purple-100' : 'bg-pink-100'
                    } ${darkMode ? 'bg-opacity-20' : ''}`}
                  >
                    <Text className="text-4xl mb-2">
                      {['🎨', '📱', '🌟', '🎯', '🔥', '💎'][index % 6]}
                    </Text>
                    <Text className={`font-semibold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      Item {index + 1}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        )}

        {selectedTab === 3 && (
          // Forms Section
          <View className="space-y-4">
            <Text className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Form Elements
            </Text>
            
            <View className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <Text className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Contact Form
              </Text>
              
              {/* Form fields would go here - simplified for demo */}
              <View className="space-y-4">
                <View>
                  <Text className={`mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </Text>
                  <View className={`h-12 rounded-lg border-2 px-4 justify-center ${
                    darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <Text className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Enter your name
                    </Text>
                  </View>
                </View>
                
                <View>
                  <Text className={`mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </Text>
                  <View className={`h-12 rounded-lg border-2 px-4 justify-center ${
                    darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <Text className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Enter your email
                    </Text>
                  </View>
                </View>
                
                <TouchableOpacity className="bg-blue-500 p-4 rounded-xl mt-6">
                  <Text className="text-white text-center font-semibold text-lg">
                    Submit Form
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}