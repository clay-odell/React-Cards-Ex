import  { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

function useFlip () {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
       setIsFacingUp(isUp => !isUp);  
    };
    return [isFacingUp, flipCard];
}

function useAxios (initialUrl) {
    const [data, setData] = useState([]);
    
    const addData = async (url) => {
        const response = await axios.get(url);
        setData(data => [...data, {...response.data, id: uuid()}]);
    };
    return [data, addData];
}

export {useFlip, useAxios};
