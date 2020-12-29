import React from 'react';
import '../styles/Grid.scss';
import Row from './Row';

export default function Grid(props) {
  const { width, height, selectedColor } = props;

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
  }

  return (
    <div id="grid">
      <div id="pixels">{rows}</div>
    </div>
  );
}