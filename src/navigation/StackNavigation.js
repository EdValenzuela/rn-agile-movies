import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Context
import AuthContext from '../context/auth/AuthContext';
import { AUTHENTICATED } from '../types';

//Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {

    const { status } = useContext(AuthContext);

    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerStyle:{
                    elevation:0,
                    shadowColor: 'transparent'
                },
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >
            {
                (status !== AUTHENTICATED) ?
                (
                    <Stack.Screen name="LoginScreen" options={{ title:"Inicio de sesion" }} component={LoginScreen} />
                ):( <>
                    <Stack.Screen name="HomeScreen" options={{ title:"Inicio" }} component={HomeScreen} />
                    <Stack.Screen name="DetailScreen" options={{ title:"Detalle de la película" }} component={DetailScreen} />
                </> )
            }
        </Stack.Navigator>
    );
};
