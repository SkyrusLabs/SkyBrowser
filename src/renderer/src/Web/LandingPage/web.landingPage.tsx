import React from 'react';
import { WebViewContainer } from './styledWeb.landingPage';
import { WebHeaderComponent } from './Components/webHeader.component';

export const WebLandingPage: React.FC = () => {
  return (
    <WebViewContainer>
      <WebHeaderComponent />
    </WebViewContainer>
  )
}
