import { cartApi } from 'shared/api/cartApi';
import { ErrorScreen } from 'shared/ui/error-screen';
import { Loading } from 'shared/ui/loading';
import { Layout } from 'widgets/layout';

import { CartForm } from './CartForm';

export function Cart() {
  const { data: cart, isLoading, error } = cartApi.useFetchCartQuery();

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

  if (!cart) return null;

  return (
    <Layout title="Cart">
      <CartForm cart={cart} />
    </Layout>
  );
}
