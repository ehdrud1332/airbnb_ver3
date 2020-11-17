import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DetailScreen from "../screens/DetailScreen";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const ListStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
    </Stack.Navigator>
)

export default ListStack;
