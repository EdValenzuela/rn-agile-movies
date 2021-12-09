import React, { useContext } from 'react'
import { Text, View, ScrollView } from 'react-native'
import AuthContext from '../context/auth/AuthContext'

import Header from '../components/shared';
import MoviesNow from '../components/items/MoviesNow'
import MoviesPopular from '../components/items/MoviesPopular';

const HomeScreen = () => {

    const { state, user, logout } = useContext(AuthContext);

    return (
        <View style={{
            flex : 1,
            padding: 16
        }}>
            <ScrollView>
                <Header user={user} logout={logout} />
                <MoviesNow />
                {/* <Text>
                    {
                        JSON.stringify(state, null, 5)
                    }
                </Text> */}
                <MoviesPopular />
            </ScrollView>
        </View>
    )
}

export default HomeScreen
