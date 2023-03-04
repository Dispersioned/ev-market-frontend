import { carApi } from 'shared/api/carApi';

import { CarItem } from './CarItem';
import { List } from './styles';

export function CarsList() {
  const { data: cars, isLoading, error } = carApi.useFetchAllCarsQuery();

  if (isLoading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return <List>{cars && cars.map((car) => <CarItem key={car.id} car={car} />)}</List>;
}
