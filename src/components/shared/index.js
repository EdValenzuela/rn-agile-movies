import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import GlobalIcon from '../icons';

const Header = ({user, logout}) => {
    const { firstName = '', lastName = '' } = user;
    return (
        <>
            <View style={styles.containerHeader}>
                <Text style={styles.txtUser}>
                    Hola { `${firstName} ${lastName}` }
                </Text>
                <TouchableOpacity 
                    activeOpacity={0.5}
                    onPress={ logout }>
                    <View style={styles.btnLogOut}>
                        <Text style={styles.txtLogOut}>Logout</Text>    
                    </View>
                </TouchableOpacity> 
                <GlobalIcon 
                    dataIcon={{
                        color: 'black',
                        size: 50,
                        name: 'person-circle'
                    }}
                />
            </View>
        </>
    )
}

Header.defaultProps = {
    user: {},
    logout: () => {}
};

Header.propTypes = {
    user : PropTypes.object.isRequired,
    logout : PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    containerHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:1,
        flexWrap: 'wrap',
        
    },
    txtUser:{
        fontSize: 16,
        color: 'black'
    },
    btnLogOut:{
        width: 80,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    txtLogOut:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'white'
    }
})

export default Header
