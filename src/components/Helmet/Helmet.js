import React from 'react';
import PropTypes from 'prop-types';

const Helmet = (props) => {
  const { title, children } = props;
  document.title = `${title}`;
  return <div>{children}</div>;
};
Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Helmet;
