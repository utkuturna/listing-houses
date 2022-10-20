import type { NextPage } from 'next';
import MainLayout from '../components/layouts/main/MainLayout';
import { MOCK_CITIES } from '../lib/data/mock.cities';
import CityLink from '../components/partials/CityLink';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Listing Houses</title>
      </Head>
      <div className="py-4">
        <h1 className="page-title">Select a city to live 🥰</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {MOCK_CITIES.map((city) => (
            <CityLink
              key={city.id}
              id={city.id}
              label={city.label}
              link={city.link}
            />
          ))}
        </div>
        <p className="my-5 text-gray-500">more cities coming soon... ⏳</p>
      </div>
    </MainLayout>
  );
};

export default Home;
