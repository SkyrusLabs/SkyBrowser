import GlobalStyles from '@renderer/Styles/GlobalStyles';
import React from 'react';

const WebApp: React.FC = () => {
  return (
    <div>
      <h1 className="webTitle">WebView</h1>
      <GlobalStyles />
    </div>
  );
};

export default WebApp;
