import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "semantic-ui-react";

import LocationCard from "./LocationCard";

export default function LocationsList() {
   const [locations, setLocations] = useState({});
   const [page, setPage] = useState(1);

  const changePage = (e, { activePage }) => {
    setPage(activePage);
  }

   useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/?page=${page}`)
         .then(response => {
            console.log(response);
            setLocations(response.data);
         })
         .catch(error => console.log(error))
   }, [page])

  if (!locations.results) return <h2>Loading...</h2>

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
            totalPages={locations.info.pages}
         />
         <section className="grid-view">
            {locations.results.map(location => {
               return <LocationCard location={location} key={location.id}/>
            })}
         </section>
      </>
   )
}
