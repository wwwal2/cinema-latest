import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

import main from './Main.scss';

export default function Footer(props) {
  const { items } = props;
  return (
    <main className={main.pageBody}>
      {items.map((item) => {
        return (
          <Card key={item.id} item={item} />
        );
      })}
    </main>
  );
}

Footer.propTypes = {
  items: PropTypes.array,
};

Footer.defaultProps = {
  items: [],
};
