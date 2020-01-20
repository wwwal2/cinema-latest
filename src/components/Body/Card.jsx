import React from 'react';
import PropTypes from 'prop-types';
// import menuStyle from '../../css_modules/bodyStyles.css';

export default function Card(props) {
  const { item } = props;
  return (
    <h2>
      {item.title}
    </h2>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};

Card.defaultProps = {
  item: {
    title: 'empty',
  },
};
