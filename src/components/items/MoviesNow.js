import React from 'react'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { baseIMG, baseURL, URL_NOW_PLAYING } from '../../config/axios'

import useFetch from '../../hooks/useFetch'

import LoadingScreen from '../../screens/LoadingScreen'
import RenderHeader from '../renderHeader'

const MoviesNow = () => {

    const { dataRest, fetching } = useFetch(`${baseURL}${URL_NOW_PLAYING}`);
    const renderItemSeparator = () => (<View style={{marginHorizontal: 10}} />)
    const renderMoviesPlaying = item => {
        const { release_date, poster_path } = item;

        return(
            <View style={{alignItems:'center'}}>
                <Image 
                    style={{width: 150, height: 250}}
                    source={{
                        uri: `${baseIMG}${poster_path}`,
                    }}
                />
                <Text style={styles.txtDate}>{release_date}</Text>
            </View>
        )
    }

    const renderData = () => {
        if(!dataRest.data) return null;
        return(
            <>
                {
                    fetching ? (<LoadingScreen />) : (
                        <FlatList 
                            data={dataRest.data}
                            renderItem={({item}) => renderMoviesPlaying(item)}
                            keyExtractor={ (item) => item.id }
                            ItemSeparatorComponent={renderItemSeparator}
                            horizontal
                        />
                    )
                } 
            </>
        )
    }

    return (
        <>
            <RenderHeader
                title="Películas en estreno" 
                dataIcon={{
                    color: 'red',
                    size: 25,
                    name: 'stats-chart'
                }} 
            />
            {renderData()}
        </>
    )
}

const styles = StyleSheet.create({
    txtDate:{
        textAlign: 'center',
        marginTop: 5,
        color:'gray',
        fontSize: 12,
    }
})

export default MoviesNow
