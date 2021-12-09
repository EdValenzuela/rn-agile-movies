import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseURL, clienteAxios } from '../config/axios';

const useFetch = url => {

    const [dataRest, setDataRest] = useState([]);
    const [fetching, setFetching] = useState(true);

    const getData = async() => {
        try {
            const myToken = await AsyncStorage.getItem('token');
            let headers = new Headers();

            console.log({myToken});

            if(myToken !== null){
                headers.append("Authorization", `Bearer ${myToken}`);
            }

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