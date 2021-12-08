import { useEffect, useState } from 'react';

const useFetch = url => {
    const [dataRest, setDataRest] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const getData = async() => {
            try {
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setDataRest(data);
                setFetching(false);
            } catch (error) {
                console.log(`error catch : ${error}`)
            }
        }
        getData();
    }, [url]);

    return { dataRest, fetching }
}

export default useFetch