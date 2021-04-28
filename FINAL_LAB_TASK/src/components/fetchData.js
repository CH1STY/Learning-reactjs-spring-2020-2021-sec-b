import  {useState, useEffect} from 'react';
import axios from 'axios'

export const DataFetching=(url)=>{

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
            console.log(res);
            setPosts(res.data);
        })
        .catch(error=>{
            console.log(error)
        },[0])
    })
    
    return posts;
   
}