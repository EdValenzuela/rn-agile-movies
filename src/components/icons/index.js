import React from 'react'
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

const GlobalIcon = ({dataIcon}) => {
    const { name='star-outline', size=50, color='green' } = dataIcon;

    return (
        <Icon 
            name={name}
            size={size}
            color={color}
        />
    )
}

GlobalIcon.defaultProps = {
    dataIcon: {},
};

GlobalIcon.propTypes = {
    dataIcon : PropTypes.object.isRequired
}

export default GlobalIcon
