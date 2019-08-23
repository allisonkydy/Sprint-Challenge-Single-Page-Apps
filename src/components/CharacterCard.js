import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const { character } = props;

  return (
    <Card>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>{`${character.species}, ${character.status}`}</Card.Meta>
        <Card.Description>
          <p>Location: {character.location.name}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Gender: {character.gender}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
