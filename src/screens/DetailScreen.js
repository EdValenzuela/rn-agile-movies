import React, { useEffect } from 'react'
import { View, Text, FlatList, Image} from 'react-native'
import { baseIMG, baseURL } from '../config/axios';
import useFetch from '../hooks/useFetch';

import LoadingScreen from './LoadingScreen';
import { globalStyles } from '../components/theme';

const DetailScreen = ({route, navigation}) => {
    const { id, original_title } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: `Detalle (${original_title} ${id})`,
        });
    }, [id]);

    const { dataRest, fetching } = useFetch(`${baseURL}/movies/${id}/actors`);

    const renderHeaderDetalle = () => (<Text style={globalStyles.textHeader}>Reparto</Text>)
    const renderPopular = ({original_name, profile_path, character}) => {
        return(
            <View style={{flex:1, alignItems:'center'}}>
                <View style={globalStyles.containerItem}>
                    <Image 
                        style={globalStyles.img}
                        source={{
                            uri: `${baseIMG}${profile_path}`,
                        }}
                    /> 
                    <Text style={{color:'white', paddingHorizontal: 15, paddingVertical: 10}}>{original_name}</Text>
                    <Text style={{color:'white', paddingHorizontal: 15, paddingVertical: 10}}>Personaje: {character}</Text>
                </View>
            </View>
        )
    }
    
    return (
        <>
        {renderHeaderDetalle()}
        {
            fetching ? (<LoadingScreen/>) : (
                <FlatList 
                    data={dataRest.data}
                    renderItem= {({item}) => renderPopular(item) }
                    keyExtractor={ (item) => item.id }
                    numColumns={2}
                /> 
            )
        }
        {/* <Text>
                {JSON.stringify(dataRest, null, 5)}
            </Text> 
        */}
        </>
    )
}

export default DetailScreen
