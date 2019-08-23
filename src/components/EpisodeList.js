import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";

import EpisodeCard from "./EpisodeCard";
import CharacterList from "./CharacterList";

export default function EpisodeList() {
   const [episodes, setEpisodes] = useState({});
   const [page, setPage] = useState(1);

  const changePage = (e, { activePage }) => {
    setPage(activePage);
  }

   useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
         .then(response => {
            console.log(response);
            setEpisodes(response.data);
         })
         .catch(error => console.log(error))
   }, [page])

  if (!episodes.results) return <h2>Loading...</h2>

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
            totalPages={episodes.info.pages}
         />
         <section className="grid-view">
            {episodes.results.map(episode => {
               return <EpisodeCard episode={episode} key={episode.id}/>
            })}
         </section>
      </>
   )
}
