import mockImage from 'shared/mocks/image.png';
import { ICarView } from 'shared/types';

export const carsViewMock: ICarView[] = [
  {
    id: 5,
    carName: '2019 JAGUAR I-RACE',
    accelerationTime: 20,
    batteryCapacity: 2000,
    features: [
      {
        id: 1,
        name: 'first feature',
        iconUrl: mockImage,
      },
    ],
    imageUrl: mockImage,
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
    carName: '2022 NISSAN LEAF',
    accelerationTime: 6,
    batteryCapacity: 4000,
    features: [
      {
        id: 2,
        name: 'first feature',
        iconUrl: mockImage,
      },
      {
        id: 2,
        name: 'second feature',
        iconUrl: mockImage,
      },
      {
        id: 2,
        name: 'third feature',
        iconUrl: mockImage,
      },
    ],
    imageUrl: mockImage,
    power: 700,
    price: 45000,
    range: 220,
  },
];
