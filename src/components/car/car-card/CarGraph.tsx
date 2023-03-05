import accelerationTimeIcon from 'assets/icons/accelerationTime.svg';
import cargoIcon from 'assets/icons/cargo.svg';
import seatIcon from 'assets/icons/seat.svg';
import weightIcon from 'assets/icons/weight.svg';
import { CAR_BODY_ICON_MAP } from 'shared/config/carBodyIconMap';
import { GridArea } from 'shared/styles';
import { IBodyStyle } from 'shared/types';

import { BottomStats, CarImg, GraphContainer, UICarGraph } from './CarGraph.styles';
import { CarStat } from './CarStat';

type CarGraphProps = {
  bodyStyle: IBodyStyle;
  weight: number;
  frontVolume?: number;
  rearVolume?: number;
  seats: number;
  accelerationTime: number;
};

export function CarGraph({ bodyStyle, weight, frontVolume, rearVolume, seats, accelerationTime }: CarGraphProps) {
  return (
    <GraphContainer>
      <UICarGraph>
        {frontVolume && (
          <GridArea name="front">
            <CarStat iconUrl={cargoIcon} tooltip="Front Cargo Volume" value={frontVolume} unit="l" />
          </GridArea>
        )}
        {rearVolume && (
          <GridArea name="back">
            <CarStat iconUrl={cargoIcon} tooltip="Rear Cargo Volume" value={rearVolume} unit="l" />
          </GridArea>
        )}
        <GridArea name="bottom">
          <BottomStats>
            <CarStat iconUrl={weightIcon} tooltip="Weight" value={weight} unit="kg" />
            <CarStat iconUrl={seatIcon} tooltip="Seats" value={seats} />
            <CarStat
              iconUrl={accelerationTimeIcon}
              tooltip="Time taken to get from 0 to 100 km per hour"
              value={accelerationTime}
            />
          </BottomStats>
        </GridArea>
        <GridArea name="car">
          <CarImg src={CAR_BODY_ICON_MAP[bodyStyle]} alt={bodyStyle} />
        </GridArea>
      </UICarGraph>
    </GraphContainer>
  );
}
