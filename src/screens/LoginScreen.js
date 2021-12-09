import React, { useContext, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Keyboard, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AuthContext from '../context/auth/AuthContext'

import { useForm } from '../hooks/useForm'

import GlobalIcon from '../components/icons'

const LoginScreen = () => {

    const { signIn, errorMessage, cleanMessage } = useContext(AuthContext);

    const { username, password, form, onChange } = useForm({
        username: '',
        password: ''
    });

    useEffect(() => {
        if(errorMessage === '') return;
        
        Alert.alert('Login fallido', errorMessage || 'Error en el login',
            [
                {
                    text: 'OK',
                    onPress : cleanMessage
                }
            ]
        );
    }, [errorMessage])

    const onLogin = () => {
        Keyboard.dismiss();
        signIn(form);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <GlobalIcon 
                    dataIcon={{
                        color: 'black',
                        size: 100,
                        name: 'people'
                    }}
                />
            </View>
            <View style={styles.containerLogin}>
                <Text style={styles.label}>Usuario :</Text>
                <TextInput 
                    style={{fontSize: 20}}
                    placeholder="agilesoft"
                    onSubmitEditing={onLogin}
                    onChangeText={ (value) => onChange(value, 'username') }
                    value={username}
                />
                <Text style={styles.label}>Contraseña :</Text>
                <TextInput 
                    style={{fontSize: 20}}
                    placeholder="agile1234"
                    secureTextEntry
                    onSubmitEditing={onLogin}
                    onChangeText={ (value) => onChange(value, 'password') }
                    value={password}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={ onLogin }
                >
                    <View style={styles.btnEnter}>
                        <Text style={styles.btnLabel}>Entrar</Text> 
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
    },
    containerIcon: {
        alignItems: 'center',
        marginBottom: 15
    },
    containerLogin:{
        paddingVertical:12,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderRadius: 10
    },
    label:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    btnEnter:{
        paddingVertical: 15,
        alignItems:'center',
        backgroundColor: 'black'
    },
    btnLabel:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default LoginScreen
