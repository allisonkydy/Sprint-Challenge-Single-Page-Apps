import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState({});
  // data is in characters.results (array)
  // pages is in characters.info (object)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response);
        setCharacters(response.data);
      })
      .catch(error => console.log(error))
  }, []);

  if (!characters.results) return <h2>Loading...</h2>

  return (
    <section className="character-list grid-view">
      {characters.results.map(character => {
        return <CharacterCard character={character} key={character.id}/>
      })}
    </section>
  );
}
