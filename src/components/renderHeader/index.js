import React from 'react'
import { View, Text } from 'react-native'
import GlobalIcon from '../icons'
import { globalStyles } from '../theme'

const RenderHeader = ({title, dataIcon}) => {
    const { color, size, name} = dataIcon;

    return (
        <View style={{flex: 1, flexDirection:'row', alignItems: 'center'}}>
            <Text style={{...globalStyles.textHeader, marginRight: 10 }}>{title}</Text>
            <GlobalIcon dataIcon={{
                    color,
                    size,
                    name
                }}
            />
            
        </View>

    )
}

export default RenderHeader
