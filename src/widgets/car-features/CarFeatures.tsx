import { IFeature } from 'shared/types';

import { FeatureItem } from './FeatureItem';
import { FeaturesList } from './styles';

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
