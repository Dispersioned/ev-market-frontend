import { Tooltip } from '@mui/material';

import { StatIcon, UICarStat } from './CarStat.styles';

type CarStatProps = {
  iconUrl: string;
  tooltip: string;
  value: number;
  unit?: string;
};

export function CarStat({ iconUrl, value, unit, tooltip }: CarStatProps) {
  return (
    <UICarStat fontWeight="inherit">
      <Tooltip title={tooltip}>
        <StatIcon src={iconUrl} alt={tooltip} />
      </Tooltip>
      {value} {unit && unit}
    </UICarStat>
  );
}
