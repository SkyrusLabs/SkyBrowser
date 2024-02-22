import React from 'react';
import { WebStyleHBrand, WebStyleHBrandContainer, WebStyleHBrandTypography, SKDS_Strong, WebStyleHeader } from './styled.webHeader';
import skBrowserIcon from '../../../../SkyBrowser.png';

export const WebHeaderComponent: React.FC = () => {
  return (
    <WebStyleHeader>
      <WebStyleHBrandContainer>
        <WebStyleHBrand src={skBrowserIcon} />
          <WebStyleHBrandTypography>Sky
            <SKDS_Strong>Browser</SKDS_Strong>
          </WebStyleHBrandTypography>
      </WebStyleHBrandContainer>
    </WebStyleHeader>
  )
}

