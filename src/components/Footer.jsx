import React from 'react';
import PropTypes from 'prop-types';
import footerStyles from '../css_modules/footerStyles.css';

export default function Footer(props) {
  const { created, email } = props;
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.content}>{created}</div>
      <div className={footerStyles.content}>{email}</div>
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
