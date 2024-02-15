import React from 'react';
import { Container } from './Styled.layout';
import { SidebarComponent } from '@renderer/components/Controls/Sidebar.component';

export const Layout: React.FC = () => {
  return (
    <Container>
      <SidebarComponent />
    </Container>
  );
};
