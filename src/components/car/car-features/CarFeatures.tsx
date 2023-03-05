import { IFeature } from 'shared/types';

import { FeaturesList } from './CarFeatures.styles';
import { FeatureItem } from './FeatureItem';

type CarFeaturesProps = {
  features: IFeature[];
};

export function CarFeatures({ features }: CarFeaturesProps) {
  return (
    <FeaturesList>
      {features.map((feat) => (
        <FeatureItem key={feat.id} feature={feat} />
      ))}
    </FeaturesList>
  );
}
