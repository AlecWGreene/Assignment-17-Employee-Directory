import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./pages/Home.js";
import Employees from "./pages/Employees.js";
import Departments from './pages/Departments.js';
import Roles from './pages/Roles.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Employees" component={Employees} />
        <Tab.Screen name="Departments" component={Departments} />
        <Tab.Screen name="Roles" component={Roles} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
