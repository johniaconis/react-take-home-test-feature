import React from 'react';
import PropTypes from 'prop-types';
import episodes from './episodes.json';

export function Other() {
  console.log('episodes', episodes);
  return (
    <div>
      Other Page :D
    </div>
  );
}
