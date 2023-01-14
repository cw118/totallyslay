import AppContext from '../components/AppContext';
import useSessionStorage from '../components/Storage';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [agentName, setAgentName] = useSessionStorage('agentName', '');

  return (
    <AppContext.Provider value={[agentName, setAgentName]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
