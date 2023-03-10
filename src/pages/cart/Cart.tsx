import { CartList } from 'components/cart/cart-list';
import { CartSummary } from 'components/cart/cart-summary';
import { cartApi } from 'shared/api/cartApi';
import { ErrorScreen } from 'shared/ui/error-screen';
import { Loading } from 'shared/ui/loading';
import { Layout } from 'widgets/layout';

import { CartLayout } from './Cart.styles';

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
      <CartLayout>
        <CartList cart={cart} />
        <CartSummary cart={cart} />
      </CartLayout>
    </Layout>
  );
}
