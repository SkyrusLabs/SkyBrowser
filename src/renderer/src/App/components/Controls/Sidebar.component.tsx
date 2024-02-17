import React from "react";
import {
  Sidebar,
  Navigation,
  WindowsActionsContainer,
  WindowActionControl,
  SideBarContent,
  NavigationContainer,
  WActions,
  SideBarIcon,
  ArrowBackIcon,
  ArrowNextIcon,
  RefreshIcon,
  HomeIcon,
  SearchIcon,
  SearchBarContainer,
  SearchInput,
} from "./Styled.Sidebar";

export const SidebarComponent: React.FC = () => {
  function requestClose(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send('skynet://application:browser/funcions/closeWindow');
  }

  function requestMaxWindow(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send('skynet://application:browser/funcions/maxWindow');
  }
  function requestMinWindow(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send('skynet://application:browser/funcions/minWindow');
  }

  function requestFullscreen(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send('skynet://application:browser/funcions/fullScreen');
  }

  return (
    <Sidebar>
      <NavigationContainer>
        <Navigation>
          <WindowsActionsContainer>
            <WindowActionControl
              className='close'
              onClick={() => requestClose()}
            />
            <WindowActionControl
              className='max'
              onClick={() => requestMaxWindow()}
            />
            <WindowActionControl
              className='ultra'
              onClick={() => requestFullscreen()}
            />
            <WindowActionControl
              className='min'
              onClick={() => requestMinWindow()}
            />
          </WindowsActionsContainer>
          <WActions>
            <SideBarContent>
              <SideBarIcon />
            </SideBarContent>
            <SideBarContent>
              <ArrowBackIcon />
            </SideBarContent>
            <SideBarContent>
              <ArrowNextIcon />
            </SideBarContent>
            <SideBarContent>
              <RefreshIcon />
            </SideBarContent>
            <SideBarContent>
              <HomeIcon />
            </SideBarContent>
          </WActions>
        </Navigation>
      </NavigationContainer>

      <SearchBarContainer>
        <SearchIcon />
        <SearchInput type="search" placeholder="Search" />
      </SearchBarContainer>
    </Sidebar>
  );
};
