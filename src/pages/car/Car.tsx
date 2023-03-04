import { useParams } from 'react-router-dom';
import { carApi } from 'shared/api/carApi';
import { Layout } from 'widgets/layout';

export function Car() {
  const { id } = useParams();
  const { data: car, isLoading, error } = carApi.useFetchCarById(id);

  if (isLoading) return <Loading />;
  if (error) return <ErrorScreen error={error} />;

  return <Layout>Car</Layout>;
}
