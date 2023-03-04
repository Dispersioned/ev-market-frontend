import logoIcon from 'assets/icons/logo.svg';
import { ICarView } from 'shared/types';

export const carViewMock: ICarView[] = [
  {
    id: 5,
    accelerationTime: 20,
    batteryCapacity: 2000,
    features: [
      {
        id: 1,
        name: 'first feature',
        iconUrl: logoIcon,
      },
    ],
    imageUrl: 'not provided',
    power: 500,
    price: 30000,
    range: 100,
    location: {
      id: 213,
      city: 'Rostov-on-Don',
      country: 'Russia',
    },
    mileage: 12452,
  },
  {
    id: 3,
    accelerationTime: 6,
    batteryCapacity: 4000,
    features: [
      {
        id: 2,
        name: 'first feature',
        iconUrl: logoIcon,
      },
      {
        id: 2,
        name: 'second feature',
        iconUrl: logoIcon,
      },
      {
        id: 2,
        name: 'third feature',
        iconUrl: logoIcon,
      },
    ],
    imageUrl: 'not provided',
    power: 700,
    price: 45000,
    range: 220,
  },
];
