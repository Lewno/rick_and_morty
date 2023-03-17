import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

export default function Detail() {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(()=>{
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "d0ee1c6a7858.3c17c7ec92d4b8f6f0ae";

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then(response=> 
        setCharacter(response.data)
        );
    },[]);
    return (
        <>
            {character.name? (
                <>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="img" />
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    );
}
