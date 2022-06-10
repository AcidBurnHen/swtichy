import Head from 'next/head';

// Components
import Footer from '../components/Footer';
import Calendar from '../components/calendar/Calendar';

import { Octokit } from 'octokit';
import { Endpoints } from '@octokit/types';
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { CalendarContext } from 'CalendarContext';

const octokit = new Octokit({ auth: process.env.REPO_TOKEN });

type listUserCommitsRes =
  Endpoints['GET /repos/{owner}/{repo}/commits']['response'];

export const getStaticProps: GetStaticProps = async () => {
  const commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: 'AcidBurnHen',
    repo: 'swtichy',
  });

  return {
    props: {
      commits: commits,
    },
  };
};

interface Props {
  commits: listUserCommitsRes;
}

const Home: FC<Props> = (props) => {


  return (
    <div>
      <Head>
        <title>Calendar App</title>
        <meta name='description' content='Calendar app exercise' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CalendarContext.Provider value={props}>
        <Calendar />
      </CalendarContext.Provider>

      <Footer />
    </div>
  );
};

export default Home;
