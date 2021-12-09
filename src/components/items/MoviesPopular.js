import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'

import LoadingScreen from '../../screens/LoadingScreen'
import RenderHeader from '../renderHeader'

import { baseIMG, baseURL, URL_POPULAR } from '../../config/axios';
import { useNavigation } from '@react-navigation/core'

import { globalStyles } from '../theme'
import useFetch from '../../hooks/useFetch'

const MoviesPopular = () => {

    const navigation = useNavigation();

    const { dataRest, fetching } = useFetch(`${baseURL}${URL_POPULAR}`);
    
    const renderPopular = ({original_title, poster_path, id}) => {
        return(
            <TouchableOpacity
                onPress={ () => navigation.navigate('DetailScreen', {id, original_title})}
                activeOpacity={0.5}
            >
                <View style={styles.containerPopular}>
                    <View style={globalStyles.containerItem}>
                        <Image 
                            style={globalStyles.img}
                            source={{
                                uri: `${baseIMG}${poster_path}`,
                            }}
                        /> 
                        <Text style={{color:'white', paddingHorizontal: 15, paddingVertical: 10}}>{original_title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <RenderHeader 
                title="Películas en populares" 
                dataIcon={{
                    color: 'red',
                    size: 25,
                    name: 'planet'
                }} 
            />
            {
                fetching ? <LoadingScreen /> :(
                    <FlatList 
                        data={dataRest.data}
                        renderItem= {({item}) => renderPopular(item) }
                        keyExtractor={ (item) => item.id }
                        numColumns={2}
                        //onEndReached={}
                        //onEndReachedThreshold={0.5}
                        //ListFooterComponent={(<LoadingScreen/>)}
                    /> 
                )
            } 
        </>
    )
}

const styles = StyleSheet.create({
    containerPopular:{
        flex: 1
    },
    txtTitle:{
        textAlign: 'center',
        marginBottom: 10,
        color:'black',
        fontSize: 10
    },
    txtDate:{
        textAlign: 'center',
        marginTop: 5,
        color:'gray',
        fontSize: 12,
    }
})

export default MoviesPopular
