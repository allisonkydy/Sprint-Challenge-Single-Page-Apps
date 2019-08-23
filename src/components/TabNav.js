import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
   return (
      <>
         {/* <Tab panes={panes} /> */}
         <NavLink to="/">Home</NavLink>
         <NavLink to="/characters">Characters</NavLink>
         <NavLink to="/locations">Locations</NavLink>
         <NavLink to="/episodes">Episodes</NavLink>
         <Route exact path="/" component={WelcomePage} />
         <Route path="/characters" component={CharacterList} />
         <Route path="/locations" component={LocationsList} />
         <Route path="/episodes" component={EpisodeList} />
         {/* // <CharacterList />
         // <LocationsList />
         // <EpisodeList /> */}
      </>
   )
};

