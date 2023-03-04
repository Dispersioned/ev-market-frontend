import { useParams } from 'react-router-dom';
import { carApi } from 'shared/api/carApi';
import { ErrorScreen } from 'shared/ui/error-screen';
import { Loading } from 'shared/ui/loading';
import { Layout } from 'widgets/layout';

import { CarCard } from './CarCard';

export function Car() {
  const { id } = useParams();
  const { data: car, isLoading, error } = carApi.useFetchCarByIdQuery(+id!);

  if (isLoading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <ErrorScreen error={error} />
      </Layout>
    );

  return <Layout>{car && <CarCard car={car} />}</Layout>;
}
