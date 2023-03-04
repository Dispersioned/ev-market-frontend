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

export type IDriveTrain = 'RWD' | 'FWD' | 'AWD';

export type ICarColor = string;

export type IBodyStyle =
  | 'Sedan'
  | 'Coupe'
  | 'SportsCar'
  | 'StationWagon'
  | 'HatchBack'
  | 'Convertible'
  | 'SUV'
  | 'MiniVan'
  | 'PickUpTruck';

export type IVehicleCondition = 'New' | 'PreOwned' | 'CertifiedPreOwned';

type ICarGeneral = {
  id: number;
  carName: string;
  price: number;
  range: number;
  power: number;
  batteryCapacity: number;
  accelerationTime: number;
  // if owned
  mileage?: number;
  // if owned
  location?: ILocation;
};

export type ICarView = ICarGeneral & {
  imageUrl: string;
  features: IFeature[];
};

export type ICar = ICarGeneral & {
  manufacturer: IManufacturer;
  chargingOptions: IChargingOption[];
  driveTrain: IDriveTrain;
  topSpeed: number;
  weight: number;
  frontCargoVolume: number;
  rearCargoVolume: number;
  seatingCapacity: number;
  exteriorColor: ICarColor;
  bodyStyle: IBodyStyle;
  manufacturingDate: Date;
  imageUrls: string[];

  // if used
  condition?: IVehicleCondition;
  // if used
  listedForSaleDate?: Date;
  // if used
  sellersStory?: string;
};
