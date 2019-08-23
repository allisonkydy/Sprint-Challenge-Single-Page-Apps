import React from "react";
import { Card } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const { character } = props;

  return (
    <Card 
      image={character.image}
      header={character.name}
      meta={`${character.species}, ${character.status}`} 
      description={`Location: ${character.location.name}`}
    />
  );
}
