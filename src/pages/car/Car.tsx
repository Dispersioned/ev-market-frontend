import { useParams } from 'react-router-dom';
import { Layout } from 'widgets/layout';

export function Car() {
  const { id } = useParams();
  console.log(id);
  return <Layout>Car</Layout>;
}
