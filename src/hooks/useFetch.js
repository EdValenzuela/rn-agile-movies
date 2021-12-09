import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL, clienteAxios } from '../config/axios';
import AuthContext from '../context/auth/AuthContext';

const useFetch = url => {

    const [dataRest, setDataRest] = useState([]);
    const [fetching, setFetching] = useState(true);

    const { token } = useContext(AuthContext);
    

    const getData = async() => {
        try {
            //const myToken = await AsyncStorage.getItem('token');
            let headers = new Headers();

            headers.append("Authorization", token && `Bearer ${token}`);
            
            let requestOptions = {
                method: 'GET',
                headers,
                redirect: 'follow'
            };

            const resp = await fetch(url, requestOptions);
            const data = await resp.json();

            setDataRest(data);
            setFetching(false);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        getData();
    }, []);
 
    return { dataRest, fetching }
}

export default useFetch