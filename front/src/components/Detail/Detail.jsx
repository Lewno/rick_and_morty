import useCharacter from "../../hook/useCharacter";
import React from "react";

const Detail = () => {
    const character = useCharacter();
    
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

export default Detail;