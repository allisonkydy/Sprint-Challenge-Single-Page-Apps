import React from "react";
import { Card } from 'semantic-ui-react';

export default function LocationCard(props) {
  const { location } = props;
  return (
    <Card 
      header={location.name}
      meta={location.dimension}
      description={`${location.residents.length} Resident(s)`}
    />
  );
}
