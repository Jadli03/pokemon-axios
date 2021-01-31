import { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = () =>{
const [v,setv] = useState(1);
const [n,setn] = useState();

useEffect(()=>{
    async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${v}`);
        setn(res.data.name);
    }
    getData();
})

    return (
        <>
            <h1> you choose {v} </h1>
            <h1>  {n} </h1>
            <select value={v}  onChange={(event)=>{
                setv(event.target.value);
            }}>
                <option value='1'> 1 </option>
                <option value='2'> 2 </option>
                <option value='3'> 3 </option>
                <option value='4'> 4 </option>
            </select>
        </>
    );

}

export default Pokemon;
