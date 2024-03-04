import GlobalStyles from '@renderer/Styles/GlobalStyles';
import React from 'react';
import { WebLandingPage } from './LandingPage/web.landingPage';

const WebApp: React.FC = () => {
  return (
    <div>
      <WebLandingPage />
      <GlobalStyles />
    </div>
  );
};

export default WebApp;
