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
        iconUrl: 'not implemented',
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
];
