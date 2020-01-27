import React from 'react';

// import filterStyles from '../css_modules/filterStyles.css';

import OptionController from './OptionController';

export default function OptionsPayload() {
  return (
    <div>
      <OptionController name="Main page card limit" action="Main" />
      <OptionController name="Popular page card limit" action="Popular" />
      <OptionController name="Favorite page card limit" action="Favorite" />
    </div>
  );
}
