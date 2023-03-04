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

export type IManufacturer = {
  id: number;
  name: string;
};

// need more research
export type IChargingOption = {
  id: number;
  description: string;
};

export type IDriveTrain = {
  RWD: 'RWD';
  FWD: 'FWD';
  AWD: 'AWD';
};

export type ICarColor = {
  undefined: undefined;
};

export type IBodyStyle = {
  Sedan: 'Sedan';
  Coupe: 'Coupe';
  SportsCar: 'SportsCar';
  StationWagon: 'StationWagon';
  HatchBack: 'HatchBack';
  Convertible: 'Convertible';
  SUV: 'SUV';
  MiniVan: 'MiniVan';
  PickUpTruck: 'PickUpTruck';
};

export type IVehicleCondition = {
  New: 'New';
  PreOwned: 'PreOwned';
  CertifiedPreOwned: 'CertifiedPreOwned';
};

export type ICarView = {
  id: number;
  carName: string;
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

export type ICar = {
  id: number;
  // year + Manufacturer + model
  carName: string;
  manufacturer: IManufacturer;
  // in $ ?
  price: number;
  // kw
  power: number;
  range: number;
  // kwh
  batteryCapacity: number;
  chargingOptions: IChargingOption[];
  driveTrain: IDriveTrain;
  accelerationTime: number;
  topSpeed: number;
  weight: number;
  frontCargoVolume: number;
  rearCargoVolume: number;
  seatingCapacity: number;
  exteriorColor: ICarColor;
  bodyStyle: IBodyStyle;
  manufacturingDate: Date;

  // for get by id
  ImageUrls: string[];

  // if used
  mileage: number;
  // if used
  condition: IVehicleCondition;
  // if used
  location: ILocation;
  // if used
  listedForSaleDate: Date;
  // if used
  sellersStory: string;
};
