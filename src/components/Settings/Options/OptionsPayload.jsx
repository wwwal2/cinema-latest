import React from 'react';

// import filterStyles from '../css_modules/filterStyles.scss';

import OptionController from './OptionController';
import Buttons from '../Buttons';

export default function OptionsPayload() {
  return (
    <div>
      <OptionController label="Main page card limit:" target="main" />
      <OptionController label="Popular page card limit:" target="popular" />
      <OptionController label="Favorite page card limit:" target="favorite" />
      <Buttons />
    </div>
  );
}
