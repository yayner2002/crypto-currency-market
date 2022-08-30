/* eslint-disable react/prop-types */
import React from 'react';

const Helmet = (props) => {
  const { title, children } = props;
  document.title = `${title}`;
  return (
    <div>{children}</div>
  );
};

export default Helmet;
