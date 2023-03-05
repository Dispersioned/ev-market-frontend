import CUV from 'assets/icons/carbody/CUV.svg';
import Convertible from 'assets/icons/carbody/Convertible.svg';
import Coupe from 'assets/icons/carbody/Coupe.svg';
import HatchBack from 'assets/icons/carbody/HatchBack.svg';
import Micro from 'assets/icons/carbody/Micro.svg';
import MiniVan from 'assets/icons/carbody/MiniVan.svg';
import PickUpTruck from 'assets/icons/carbody/PickUpTruck.svg';
import SUV from 'assets/icons/carbody/SUV.svg';
import Sedan from 'assets/icons/carbody/Sedan.svg';
import SportsCar from 'assets/icons/carbody/SportsCar.svg';
import { IBodyStyle } from 'shared/types';

export const CAR_BODY_ICON_MAP: Record<IBodyStyle, string> = {
  Micro,
  Sedan,
  Coupe,
  SportsCar,
  HatchBack,
  Convertible,
  SUV,
  CUV,
  MiniVan,
  PickUpTruck,
} as const;
