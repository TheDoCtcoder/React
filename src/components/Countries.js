import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    const [data, setData] = useState([]);
    // le use effect se joue lorsque le composant est monté
    useEffect(() => {
        axios
        .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
         <h1>TOUS LES PAYS DU MONDE</h1>   
         <ul>
            { data.map((country, index) =>(
                <Cards key={index} country={country}/>
                ))}
         </ul>
        </div>
    );
};

export default Countries;