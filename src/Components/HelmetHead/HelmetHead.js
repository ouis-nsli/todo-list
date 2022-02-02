import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetHead = ({ title, desc }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} </title>
        <meta name="description" content={desc} />
      </Helmet>
    </>
  );
};

export default HelmetHead;
