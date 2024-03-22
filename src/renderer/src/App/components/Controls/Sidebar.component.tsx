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
  /* HomeIcon, */
  SearchIcon,
  SearchBarContainer,
  SearchInput,
  SearchIconConmponent,
} from "./Styled.Sidebar";



export const SidebarComponent: React.FC = () => {
  const ShieldStates = {
    onFocus: "highlighted",
    protected: "protected",
    unsecure: "unsecure",
    standby: "standby"
  };
  const [shieldStyle, setShieldStyle] = useState(ShieldStates.standby);
  const [shiftPressed, setShiftPressed] = useState(false);

  // ACTIONS
  function requestClose(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send(
      "skynet://application:browser/funcions/closeWindow",
    );
  }

  function requestMaxWindow(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send(
      "skynet://application:browser/funcions/maxWindow",
    );
  }
  function requestMinWindow(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send(
      "skynet://application:browser/funcions/minWindow",
    );
  }

  function reloadSSLCheck(): void {
    setShieldStyle(ShieldStates.standby)
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") {
      setShiftPressed(true);
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "Shift") {
      setShiftPressed(false);
    }
  });

  function sslCheck(): void {
    if (
      searchValue.startsWith("http://") ||
      searchValue.startsWith("skynetUnp://")
    ) {
      window.electron.ipcRenderer.send(
        "skynet://application:browser/funcions/sslInfo",
      );
      setShieldStyle(ShieldStates.unsecure)
    } else if (
      searchValue.startsWith("https://") ||
      searchValue.startsWith("skynet://")
    ) {
      setShieldStyle(ShieldStates.onFocus)
    } else {
      reloadSSLCheck();
    }
  }

  function requestFullscreen(): void {
    // eslint-disable-next-line prettier/prettier
    window.electron.ipcRenderer.send(
      "skynet://application:browser/funcions/fullScreen",
    );
  }

  function requestSkynetProtection() {
    const skynetPortal = {
      poweredBy: "Skyrus Labz",
      copyright: "Skyrus LTDA.",
      cpr: "Copyright DI",
      connectRequest:
        'skynetUnp://rede:infraNet.tdroid/connect?request="Read.Wright.Search.connect.admin4.browser"?auth=skybrowser;',
      connectData:
        'skynet://rede:infraNet.tdroid/connect?request="Read.Wright.Search.connect.admin4.browser"?auth=skybrowser;',
    };

    const params = {
      msg: "This is Skynet",
      code: "9B2",
      statusCode: "200",
      statusMessage: "OK!",
      response: skynetPortal,
    };
    const code = 'console.log("finalmente ")';

    window.electron.ipcRenderer.send(
      "skynet://application:browser/rpc&send/rpcInfo",
      params,
      code,
    );
    if (shieldStyle === ShieldStates.onFocus) {
      setShieldStyle(ShieldStates.standby);
    } else {
      setShieldStyle(ShieldStates.onFocus);
    }
  }

  const [searchValue, updateSValue] = useState("");
  const [hasSSL, updateSSLVerification] = useState(false);

  useEffect(() => {
    if (searchValue === "/activePRT") {
      updateSValue("skynet://application:browser/rpc&send/rpcInfo");
      window.electron.ipcRenderer.send(
        "skynet://skybrowser:rpc.send/funcions/activeProtection?option=",
        "opa",
      );

      setTimeout(() => {
        alert("Enviando solicitação...");
      }, 1000);
    } else if (
      searchValue === "skynet://application:browser/rpc&send/rpcInfo"
    ) {
      setShieldStyle(ShieldStates.protected)
      window.electron.ipcRenderer.send(
        "skynet://skybrowser:rpc.send/funcions/activeProtection?option=",
        "test",
      );
    }

    sslCheck();
  }, [
    searchValue,
    updateSValue,
    updateSSLVerification,
  ]);

  function handleButtonClick(event: React.MouseEvent<HTMLElement>) {
    if (event.shiftKey) {
      window.electron.ipcRenderer.send("skynet://application:browser/funcions/hardReload")
    } else {
      // Paginas e Navegação não implementadas ainda
    }
  }

  return (
    <Sidebar>
      <NavigationContainer>
        <Navigation>
          <WindowsActionsContainer>
            <WindowActionControl
              className="close"
              onClick={() => requestClose()}
            />
            <WindowActionControl
              className="max"
              onClick={() => requestMaxWindow()}
            />
            <WindowActionControl
              className="ultra"
              onClick={() => requestFullscreen()}
            />
            <WindowActionControl
              className="min"
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
            <SideBarContent onClick={(e) => handleButtonClick(e)}>
              <RefreshIcon className={shiftPressed ? 'hardAction' : ''} />
            </SideBarContent>
            <SideBarContent>
              <ArrowNextIcon />
            </SideBarContent>
            {/* <SideBarContent>
              <HomeIcon />
            </SideBarContent> */}
          </WActions>
        </Navigation>
      </NavigationContainer>

      <SearchBarContainer>
        <SearchIconConmponent
          onClick={async () => {
            console.log("okSkynetON");
            const x = requestSkynetProtection();
            return x;
          }}
        >
          <SearchIcon
            className={
              (shieldStyle === ShieldStates.protected ? "active" : "") +
              (shieldStyle === ShieldStates.unsecure ? "noSSL" : "") +
              (shieldStyle === ShieldStates.onFocus ? "focus" : "") +
              (hasSSL ? "active" : "")
            }
          />
        </SearchIconConmponent>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={e => updateSValue(e.target.value)}
        />
      </SearchBarContainer>
    </Sidebar>
  );
};
