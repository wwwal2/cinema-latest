import React from 'react';
import PropTypes from 'prop-types';
import footer from './Footer.css';

export default function Footer(props) {
  const { created, email } = props;
  return (
    <div className={footer.footer}>
      <div className={footer.content}>{created}</div>
      <div className={footer.content}>{email}</div>
    </div>
  );
}

Footer.propTypes = {
  created: PropTypes.string,
  email: PropTypes.string,
};

Footer.defaultProps = {
  created: 'Feb 2020',
  email: 'oleksiis@default-value.com',
};
