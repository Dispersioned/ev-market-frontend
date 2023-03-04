import { carApi } from 'shared/api/carApi';
import { ErrorScreen } from 'shared/ui/error-screen';
import { Loading } from 'shared/ui/loading';

import { CarItem } from './CarItem';
import { List } from './styles';

export function CarsList() {
  const { data: cars, isLoading, error } = carApi.useFetchAllCarsQuery();

  if (isLoading) return <Loading />;
  if (error) return <ErrorScreen error={error} />;

  return <List>{cars && cars.map((car) => <CarItem key={car.id} car={car} />)}</List>;
}
