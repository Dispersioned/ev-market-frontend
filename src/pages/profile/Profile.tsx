import { Typography } from '@mui/material';
import { useTypeSelector } from 'shared/hooks/redux';
import { Layout } from 'widgets/layout';

export function Profile() {
  const user = useTypeSelector((state) => state.viewer.user);

  return (
    <Layout>
      <Typography variant="h2">
        {user?.name}, {user?.age}
      </Typography>
      <Typography variant="h5">{user?.address}</Typography>
      <Typography variant="h5">My orders</Typography>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, pariatur.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, beatae.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quod.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quod.</li>
      </ul>
    </Layout>
  );
}
