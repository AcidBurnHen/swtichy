import Head from 'next/head';

// Components
import Footer from '../components/Footer';
import Calendar from '../components/calendar/Calendar';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta name='description' content='Calendar app exercise' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Calendar />

      <Footer />
    </div>
  );
};

export default Home;
