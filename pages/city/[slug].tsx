import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../components/layouts/main/MainLayout';
import { useRouter } from 'next/router';

const City: NextPage = () => {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';

  return (
    <MainLayout>
      <Head>
        <title>Listing Houses</title>
      </Head>
      <div className="py-4">
        <h1 className="page-title">{slug} 🥰</h1>
      </div>
    </MainLayout>
  );
};

export default City;

export const getServerSideProps: GetServerSideProps = async () => {
  /**
   * Get data on server side if returns 404 redirect to 404 without rendering the page.
   **/

  return {
    props: {},
  };
};
