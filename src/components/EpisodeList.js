import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
   const [episodes, setEpisodes] = useState({});
   // data is in episodes.results (array)
   // pages is in episodes.info (object)

   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/episode/')
         .then(response => {
            console.log(response);
            setEpisodes(response.data);
         })
         .catch(error => console.log(error))
   }, [])

  if (!episodes.results) return <h2>Loading...</h2>

   return (
      <section className="grid-view">
         {episodes.results.map(episode => {
            return <EpisodeCard episode={episode} key={episode.id}/>
         })}
      </section>
   )
}
