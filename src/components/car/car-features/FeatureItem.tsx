import { Typography } from '@mui/material';
import { IFeature } from 'shared/types';

import { FeatureIcon, UIFeatureItem } from './FeatureItem.styles';

type FeatureItemProps = {
  feature: IFeature;
};

export function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <UIFeatureItem>
      <FeatureIcon src={feature.iconUrl} alt="name" />
      <Typography>{feature.name}</Typography>
    </UIFeatureItem>
  );
}
