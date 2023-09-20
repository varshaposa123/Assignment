import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from Expo
import GetScreen from './GetScreen';
import PostScreen from './PostScreen';
import PutScreen from './PutScreen';
import DeleteScreen from './DeleteScreen';
import commonStyles from './styles';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Get"
          component={GetScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="get-app" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={PostScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="post-add" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Put"
          component={PutScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="edit" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Delete"
          component={DeleteScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="delete" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
