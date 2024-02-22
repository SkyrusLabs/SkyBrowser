import React, { useEffect, useState } from "react";
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
  SearchIconConmponent,
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

  function reloadSSLCheck(): void {
    updateProtection(false);
    updateSSLAlert(false);
  }

  function sslCheck(): void {
    if (searchValue.startsWith("http://") || searchValue.startsWith("skynetUnp://")) {
      window.electron.ipcRenderer.send('skynet://application:browser/funcions/sslInfo');
      console.log("ativou!")
      updateSSLAlert(true);
    } else {
      console.log("ssl n verificado")
      reloadSSLCheck()
    }
  }

  function requestFullscreen(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send('skynet://application:browser/funcions/fullScreen');
  }

  function requestSkynetProtection() {
    // eslint-disable-next-line prettier/prettier
    const skynetPortal = {
      poweredBy: "Skyrus Labz",
      copyright: "Skyrus LTDA.",
      cpr: "Copyright DI",
      connectRequest: 'skynetUnp://rede:infraNet.tdroid/connect?request="Read.Wright.Search.connect.admin4.browser"?auth=skybrowser;',
      connectData: 'skynet://rede:infraNet.tdroid/connect?request="Read.Wright.Search.connect.admin4.browser"?auth=skybrowser;'
    }

    let params = {
      msg: "This is Skynet",
      code: "9B2",
      statusCode: "200",
      statusMessage: "OK!",
      response: skynetPortal
    }
    let code = "console.log(\"finalmente \")";

    window.electron.ipcRenderer.send('skynet://application:browser/rpc&send/rpcInfo', params, code);
  }

  const [searchValue, updateSValue] = useState("");
  const [isProtected, updateProtection] = useState(false);
  const [hasSSL, updateSSLVerification] = useState(false);
  const [sslRiscAlert, updateSSLAlert] = useState(false);

  useEffect(() => {
    if (searchValue === "/activePRT") {
      updateSValue("skynet://application:browser/rpc&send/rpcInfo");
      window.electron.ipcRenderer.send('skynet://skybrowser:rpc.send/funcions/activeProtection?option=');


      setTimeout(() => {
        alert("Enviando solicitação...");
      }, 1000);
    } else if (searchValue === "skynet://application:browser/rpc&send/rpcInfo") {
      updateProtection(true);
    }

    sslCheck()
  }, [searchValue, updateSValue, updateProtection, updateSSLVerification, updateSSLAlert]);

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
        <SearchIconConmponent onClick={async () => {
          console.log("okSkynetON")
          let x = requestSkynetProtection();
          return x
        }
        }>
          <SearchIcon
            className={
              (isProtected ? "active" : "") +
              (sslRiscAlert ? "noSSL" : "") +
              (hasSSL ? "active" : "")
            }
          />
        </SearchIconConmponent >
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => updateSValue(e.target.value)}
        />
      </SearchBarContainer>
    </Sidebar>
  );
};
