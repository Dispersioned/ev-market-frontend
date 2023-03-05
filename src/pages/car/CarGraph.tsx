import cargoIcon from 'assets/icons/cargo.svg';
import seatIcon from 'assets/icons/seat.svg';
import weightIcon from 'assets/icons/weight.svg';
import { CAR_BODY_ICON_MAP } from 'shared/config/carBodyIconMap';
import { IBodyStyle, ICar } from 'shared/types';

import { CarImg, UICarGraph, WeightStat } from './CarGraph.styles';

type CarGraphProps = {
  bodyStyle: IBodyStyle;
  weight: number;
  frontVolume: number;
  rearVolume: number;
  seats: number;
};

export function CarGraph({ bodyStyle, weight, frontVolume, rearVolume, seats }: CarGraphProps) {
  return (
    <UICarGraph>
      {/* <CarStat iconUrl={cargoIcon} tooltip="Front Cargo Volume" value={frontVolume} unit="l" /> */}
      <WeightStat iconUrl={weightIcon} tooltip="Weight" value={weight} unit="kg" />
      {/* <CarStat iconUrl={cargoIcon} tooltip="Rear Cargo Volume" value={rearVolume} unit="l" /> */}
      {/* <CarStat iconUrl={seatIcon} tooltip="Seats" value={seats} /> */}
      <CarImg src={CAR_BODY_ICON_MAP[bodyStyle]} alt={bodyStyle} />
    </UICarGraph>
  );
}
