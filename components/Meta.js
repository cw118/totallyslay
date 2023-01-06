import Head from 'next/head';

const Meta = ({ title, description, icon }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href={icon} />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'M.A.R.I.',
  description: 'Welcome to the Marianopolis Academic Research Institute\' website!',
}

export default Meta;