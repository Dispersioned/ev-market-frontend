import { Tooltip } from '@mui/material';

import { StatIcon, UICarStat } from './styles';

type CarStatProps = {
  iconUrl: string;
  tooltip: string;
  value: number;
  // eslint-disable-next-line react/require-default-props
  unit?: string;
};

export function CarStat({ iconUrl, value, unit, tooltip }: CarStatProps) {
  return (
    <UICarStat>
      <Tooltip title={tooltip}>
        <StatIcon src={iconUrl} alt={tooltip} />
      </Tooltip>
      {value} {unit && unit}
    </UICarStat>
  );
}
