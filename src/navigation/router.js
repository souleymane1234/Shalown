import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import AccountScreen from '../screens/Account'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'
import ValidationCompteScreen from '../screens/ValidationCompte'
import AccueilScreen from '../screens/Accueil'
import RendezVousScreen from '../screens/RendezVous'
import PharmacieScreen from '../screens/Pharmacie'
import ContactScreen from '../screens/Contact'


const Stack = createStackNavigator()

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AccountScreen" headerMode="none">
                <Stack.Screen
                    name={'AccountScreen'}
                    component={AccountScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'LoginScreen'}
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'RegisterScreen'}
                    component={RegisterScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'ValidationCompteScreen'}
                    component={ValidationCompteScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'AccueilScreen'}
                    component={AccueilScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'RendezVousScreen'}
                    component={RendezVousScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'PharmacieScreen'}
                    component={PharmacieScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'ContactScreen'}
                    component={ContactScreen}
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router