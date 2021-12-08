import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {

    const handleLogin = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View>
            <Text>HomeScreen</Text>

            <Button 
                title="ir a login"
                onPress={ handleLogin }
            />
        </View>
    )
}

export default HomeScreen
