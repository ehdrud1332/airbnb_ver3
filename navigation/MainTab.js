import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EvilIcons} from '@expo/vector-icons';

import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DmScreen from "../screens/DmScreen";

const Tab = createBottomTabNavigator();

const MainTab = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="검색"
            component={SearchScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <EvilIcons name="search" color={color} size={size}/>
                )
            }}
        />
        <Tab.Screen
            name="메세지"
            component={DmScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <EvilIcons name="search" color={color} size={size}/>
                )
            }}
        />
        <Tab.Screen
            name="프로필"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <EvilIcons name="search" color={color} size={size}/>
                )
            }}
        />
    </Tab.Navigator>
)

export default MainTab;
