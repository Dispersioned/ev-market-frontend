import { Paper, Typography } from '@mui/material';
import batteryIcon from 'assets/icons/battery.svg';
import powerIcon from 'assets/icons/power.svg';
import rangeIcon from 'assets/icons/range.svg';
import topSpeedIcon from 'assets/icons/topSpeed.svg';
import weightIcon from 'assets/icons/weight.svg';
import { GridArea } from 'shared/styles';
import { ICar } from 'shared/types';
import { CarFeatures } from 'widgets/car-features';

import { CarStat } from './CarStat';
import { CarImage, CarStats, Content, Gallery, Info } from './styles';

type CarCardProps = {
  car: ICar;
};

export function CarCard({ car }: CarCardProps) {
  return (
    <Content>
      <Gallery>
        {car.imageUrls.map((url, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <CarImage key={i + url} src={url} alt={url} />
        ))}
      </Gallery>
      <Info>
        <GridArea name="title">
          <Typography variant="h3">{car.carName}</Typography>
          <div style={{ display: 'flex', gap: 20 }}>
            <Typography>{car.bodyStyle} ЗАМАПИТЬ В КАРТИНКУ С ТУЛТИПОМ</Typography>
            <Typography>{car.accelerationTime}s / 100 kmh</Typography>
          </div>
        </GridArea>
        <GridArea name="subinfo">
          <CarStats>
            <CarStat iconUrl={batteryIcon} tooltip="Battery Capacity" value={car.batteryCapacity} unit="kw/h" />
            <CarStat iconUrl={powerIcon} tooltip="Power" value={car.power} unit="kw" />
            <CarStat iconUrl={rangeIcon} tooltip="Range" value={car.range} unit="km" />
            <CarStat iconUrl={topSpeedIcon} tooltip="Top Speed" value={car.topSpeed} unit="km/h" />
            {/* <CarStat iconUrl={weightIcon} tooltip="Weight" value={car.weight} unit="kg" /> */}
          </CarStats>
        </GridArea>
        <GridArea name="graph">text</GridArea>
        <GridArea name="features">
          <CarFeatures features={car.features} />
        </GridArea>
        <GridArea name="price">
          <Paper>Price</Paper>
        </GridArea>
        <GridArea name="sellerStory">
          <Typography variant="h6" fontWeight={500}>
            Sellers note
          </Typography>
          <Typography>{car.sellersStory}</Typography>
        </GridArea>
        <GridArea name="location">
          <Typography>{car.location?.country}</Typography>
          <Typography>{car.location?.city}</Typography>
        </GridArea>
      </Info>
    </Content>
  );
}
