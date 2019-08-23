import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
   const [locations, setLocations] = useState({});
   // data is in locations.results (array)
   // pages is in locations.info (object)

   useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/location/')
         .then(response => {
            console.log(response);
            setLocations(response.data);
         })
         .catch(error => console.log(error))
   }, [])

  if (!locations.results) return <h2>Loading...</h2>

   return (
      <section>
         {locations.results.map(location => {
            return <LocationCard location={location} key={location.id}/>
         })}
      </section>
   )
}
