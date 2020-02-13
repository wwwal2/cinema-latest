import React from 'react';
import { filters, options } from '../../constants';
import settingsStyles from './Settings.scss';

import FilterPayload from './Filters';
import OptionsPayload from './Options';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: 'Filters',
      hide: true,
    };
  }

  toggle(info) {
    const { settings, hide } = this.state;
    if (info === settings || hide === true) {
      this.setState({
        hide: !hide,
      });
    }
    this.setState({
      settings: info,
    });
  }

  render() {
    const { settings, hide } = this.state;

    return (
      <div className={settingsStyles.container}>
        <button
          type="button"
          className={
            settings === filters && !hide
              ? settingsStyles.activeButton
              : settingsStyles.settingsBtn
          }
          onClick={() => this.toggle(filters)}
        >
          {filters}
        </button>
        <button
          type="button"
          className={
            settings === options && !hide
              ? settingsStyles.activeButton
              : settingsStyles.settingsBtn
          }
          onClick={() => this.toggle(options)}
        >
          {options}
        </button>
        <div className={settingsStyles[`hide-${hide}`]}>
          {
            settings === filters
              ? <FilterPayload />
              : <OptionsPayload />
          }
        </div>
      </div>
    );
  }
}
