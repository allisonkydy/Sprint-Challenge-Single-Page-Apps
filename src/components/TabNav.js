import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";

export default function TabNav() {
   const [activeItem, setActiveItem] = useState('home');

   const handleItemClick = (e, { name }) => {
      setActiveItem(name);
   }

   return (
      <>
         <Menu tabular>
            <Menu.Item
               name='home'
               active={activeItem === 'home'}
               onClick={handleItemClick}
            >
               <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item
               name='characters'
               active={activeItem === 'characters'}
               onClick={handleItemClick}
            >
               <NavLink to="/characters">Characters</NavLink>
            </Menu.Item>
            <Menu.Item
               name='locations'
               active={activeItem === 'locations'}
               onClick={handleItemClick}
            >
               <NavLink to="/locations">Locations</NavLink>
            </Menu.Item>
            <Menu.Item
               name='episodes'
               active={activeItem === 'episodes'}
               onClick={handleItemClick}
            >
               <NavLink to="/episodes">Episodes</NavLink>
            </Menu.Item>
         </Menu>
         <Route exact path="/" component={WelcomePage} />
         <Route path="/characters" component={CharacterList} />
         <Route path="/locations" component={LocationsList} />
         <Route path="/episodes" component={EpisodeList} />
      </>
   )
};

