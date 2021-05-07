import {useState, useEffect} from 'react';
import axios from 'axios';


export const useFetch = (url)=>{

    const [status, setStatus] = useState(true);
    const [users, setUsers] = useState([]);
    const [lurl] = useState(url);
    
    useEffect(()=>{

        const fetchData = async () =>{
            const res = await axios.get(lurl);
            setUsers(res.data);
            setStatus(false);

        }

        fetchData();

    },[]);
   

    
    return { status, users };
}