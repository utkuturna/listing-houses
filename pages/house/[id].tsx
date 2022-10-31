import { GetServerSideProps, NextPage } from 'next';
import MainLayout from '../../components/layouts/main/MainLayout';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getHouse } from '../../lib/network/getHouse';
import HouseDetail from '../../components/partials/HouseDetail';
import Head from 'next/head';
const House: NextPage = () => {
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : '';
  const { data, isLoading } = useQuery(['city', id], () => getHouse(id));
  if (!id) return null;
  /* @todo implement loading spinner animation */
  if (isLoading) return <div>Loaidng...</div>;
  return (
    <MainLayout>
      <Head>
        {/* @todo implement other required meta tags */}
        <title>
          {data.Titels[0].Omschrijving
            ? data.Titels[0].Omschrijving
            : 'Some House'}
        </title>
      </Head>
      <HouseDetail {...data} />
    </MainLayout>
  );
};

export default House;

export const getServerSideProps: GetServerSideProps = async (context) => {
  /**
   * Get data on server side if returns 404 redirect to 404 without rendering the page.
   **/
  const queryClient = new QueryClient();
  const id = context.params?.id as string;
  try {
    await queryClient.fetchQuery(['house', id], () => getHouse(id));
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (e) {
    /* @todo implement custom 404 page */
    return {
      notFound: true,
    };
  }
};
