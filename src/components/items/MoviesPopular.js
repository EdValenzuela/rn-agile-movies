import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import MoviesContext from '../../context/movies/AgileMoviesContext'

import LoadingScreen from '../../screens/LoadingScreen'
import RenderHeader from '../renderHeader'

import { baseIMG } from '../../config/axios';
import { useNavigation } from '@react-navigation/core'

import { globalStyles } from '../theme'

const MoviesPopular = () => {

    const navigation = useNavigation();

    const { popular, popularFetching } = useContext(MoviesContext);
    
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

    useEffect(() => {
        if(!popular) return <LoadingScreen />;
    }, [popular.data])

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
                popularFetching ? <LoadingScreen /> :(
                    <FlatList 
                        data={popular.data}
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
