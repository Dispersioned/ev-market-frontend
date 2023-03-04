import mockImage from 'shared/mocks/image.png';
import { ICar } from 'shared/types';

export const carMock: ICar = {
  id: 5,
  carName: '2019 JAGUAR I-RACE',
  accelerationTime: 20,
  batteryCapacity: 2000,
  // так-то фичи тут тоже нужны
  // features: [
  //   {
  //     id: 1,
  //     name: 'first feature',
  //     iconUrl: mockImage,
  //   },
  // ],
  power: 500,
  price: 30000,
  range: 100,
  location: {
    id: 213,
    city: 'Rostov-on-Don',
    country: 'Russia',
  },
  mileage: 12452,
  manufacturer: {
    id: 143532,
    name: 'Jaguar',
  },
  chargingOptions: [
    {
      id: 5334543,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugiat accusantium porro dicta, necessitatibus reprehenderit alias praesentium explicabo libero sint consequuntur nostrum ipsam placeat iusto repudiandae delectus r',
    },
    {
      id: 214321,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellat soluta commodi sunt similique nihil?',
    },
    {
      id: 13412,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius inventore enim exercitationem facilis temporibus possimus, non est molestiae libero sit vel.',
    },
  ],
  driveTrain: 'AWD',
  topSpeed: 320,
  weight: 2250,
  frontCargoVolume: 30,
  rearCargoVolume: 55,
  seatingCapacity: 4,
  exteriorColor: 'red',
  bodyStyle: 'SportsCar',
  manufacturingDate: new Date(),
  imageUrls: [mockImage, mockImage, mockImage],
  condition: 'New',
  listedForSaleDate: new Date(),
  sellersStory: 'cool story bro Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
