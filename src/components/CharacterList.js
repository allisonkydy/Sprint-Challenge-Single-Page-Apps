import React, { useEffect, useState } from "react";
import axios from 'axios';

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

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}
