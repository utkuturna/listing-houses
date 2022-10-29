import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '../../components/layouts/main/MainLayout';
import { useRouter } from 'next/router';
import { getCity } from '../../lib/network/getCity';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import CityList from '../../components/partials/CityList';

const City: NextPage = () => {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';
  const { data, isLoading } = useQuery(['city', slug], () => getCity(slug));
  if (isLoading) return <div>Loaidng...</div>;
  return (
    <MainLayout>
      <Head key="list-head">
        <title key="list">
          {data.Metadata.Titel ? data.Metadata.Titel : 'Houses for sale'}
        </title>
      </Head>
      <div className="py-4">
        {data.Metadata.Titel && (
          <h1 className="page-title">{data.Metadata.Titel} 🏠</h1>
        )}
      </div>
      <div className="md:grid md:grid-cols-4">
        {/* @todo implement filter ui */}
        <div className="md:col-span-1 mb-4">filter</div>
        <div className="md:col-span-3">
          <CityList list={data.Objects} />
        </div>
      </div>
    </MainLayout>
  );
};

export default City;

export const getServerSideProps: GetServerSideProps = async (context) => {
  /**
   * Get data on server side if returns 404 redirect to 404 without rendering the page.
   **/
  const queryClient = new QueryClient();
  const slug = context.params?.slug as string;
  if (!slug) {
    return {
      props: {},
    };
  }
  await queryClient.fetchQuery(['city', slug], () => getCity(slug));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
