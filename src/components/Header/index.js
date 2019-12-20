import React from 'react';
import PropTypes from 'prop-types';

function Header() {
  return <div className="header">Header</div>;
}

export default Header;

Header.propTypes = {
  title: PropTypes.string
};
