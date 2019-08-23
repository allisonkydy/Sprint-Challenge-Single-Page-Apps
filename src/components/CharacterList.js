import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { Pagination } from "semantic-ui-react";

export default function CharacterList() {
  const [characters, setCharacters] = useState({});
  const [page, setPage] = useState(1);

  const changePage = (e, { activePage }) => {
    setPage(activePage);
  }

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(response => {
        console.log(response);
        setCharacters(response.data);
      })
      .catch(error => console.log(error))
  }, [page]);

  if (!characters.results) return <h2>Loading...</h2>

  return (
    <>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        activePage={page}
        onPageChange={changePage}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={25}
      />
      <section className="character-list grid-view">
        {characters.results.map(character => {
          return <CharacterCard character={character} key={character.id}/>
        })}
      </section>
    </>
  );
}
