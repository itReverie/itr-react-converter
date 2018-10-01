import React from 'react';
import Page from '../../components/page';
import pageNotFound from '../../assets/404.png';

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="Ups this page doesn't exist."
    noCrawl
  >
    <img src={pageNotFound} alt="Page not found" style={{ width: '250px' }} />
    <p>Uh oh! Page not found.</p>
  </Page>
);
