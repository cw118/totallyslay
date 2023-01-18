import AppContext from '../components/AppContext';
import useSessionStorage from '../components/Storage';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // Initialize empty agentName to prep for name input on MOOHP homepage
  // then provide that to AppContext for use across the entire site
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
