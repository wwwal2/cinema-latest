import React from 'react';
// import filterStyles from '../css_modules/filterStyles.css';

import OptionController from './OptionController';

export default function OptionsDropdown() {
  return (
    <div>
      <OptionController name="Main page card limit" />
      <OptionController name="Popular page card limit" />
      <OptionController name="Favorite page card limit" />
    </div>
  );
}
