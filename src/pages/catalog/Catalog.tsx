import { carApi } from 'shared/api/carApi';
import { Layout } from 'widgets/layout';

export function Catalog() {
  const { data: cars, isLoading } = carApi.useFetchAllCarsQuery();
  return <Layout>Catalog {isLoading ? 'true' : 'false'}</Layout>;
}
