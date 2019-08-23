import React from "react";
import { Card } from 'semantic-ui-react';

export default function EpisodeCard(props) {
  const { episode } = props;
  return (
    <Card 
      header={episode.name}
      meta={episode.episode}
      description={`Aired ${episode.air_date}`}
    />
  );
}
