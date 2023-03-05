import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';
import { Layout } from 'widgets/layout';

import { Hero } from './styles';

export function Home() {
  return (
    <Layout>
      <Hero>
        <Typography variant="h1" fontSize={60} fontWeight={400}>
          Electric Vehicle market
        </Typography>
        <Typography variant="h4">First in Rostov-on-Don</Typography>
      </Hero>
      <Link to={ROUTES.catalog}>
        <Button variant="contained">Check the catalog</Button>
      </Link>
    </Layout>
  );
}
