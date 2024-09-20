import  { useState } from 'react';

function useFlip () {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
       setIsFacingUp(isUp => !isUp);  
    };
    return [isFacingUp, flipCard];
}

function useAxios (url) {
    const [data, setData] = useState([]);
    
    const addData = async () => {
        const response = await axios.get(url);
        setData(data => [...data, response.data]);
    };
    return [data, addData];
}

export default {useFlip, useAxios};
