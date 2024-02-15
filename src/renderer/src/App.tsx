import { Layout } from './Layout/Layout';
import GlobalStyles from './Styles/GlobalStyles';

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');

  // sim essa versão vamos mudar essa view pra uma temporaria
  return (
    <>
      <Layout />
      <GlobalStyles />
    </>
  );
}

export default App;
