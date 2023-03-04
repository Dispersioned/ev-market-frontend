import { Typography } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { UIError } from './styles';

type ErrorScreenProps = {
  error: FetchBaseQueryError | SerializedError;
};

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <UIError>
      <div>
        {(() => {
          if ('data' in error) {
            return <Typography>{error.status}. An error occured</Typography>;
          }
          return <Typography>An error occured. Check the network tab</Typography>;
        })()}
      </div>
    </UIError>
  );
}
