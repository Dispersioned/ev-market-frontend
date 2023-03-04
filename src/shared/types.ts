export type IFeature = {
  id: number;
  name: string;
  iconUrl: string;
};

export type ILocation = {
  id: number;
  country: string;
  city: string;
  // more?
};

export type ICarView = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  range: number;
  power: number;
  batteryCapacity: number;
  accelerationTime: number;
  features: IFeature[];
  // if owned
  mileage?: number;
  // if owned
  location?: ILocation;
};
