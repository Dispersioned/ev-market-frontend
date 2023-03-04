import { Tooltip } from '@mui/material';

import { StatIcon, UICarStat } from './styles';

type CarStatProps = {
  iconUrl: string;
  value: number;
  unit: string;
  tooltip: string;
};

export function CarStat({ iconUrl, value, unit, tooltip }: CarStatProps) {
  return (
    <UICarStat>
      <Tooltip title={tooltip}>
        <StatIcon src={iconUrl} alt={tooltip} />
      </Tooltip>
      {value} {unit}
    </UICarStat>
  );
}
