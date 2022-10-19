import type { NextPage } from 'next';
import MainLayout from "../components/layouts/main/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="py-4">
        <h1 className="page-title">Select a city to live 🥰</h1>
      </div>
    </MainLayout>
  );
};

export default Home;
