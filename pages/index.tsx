import type { NextPage } from 'next';
import MainLayout from "../components/layouts/main/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>Hello World!</div>
    </MainLayout>
  );
};

export default Home;
