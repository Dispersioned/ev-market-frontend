import { Typography } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { Description, UIError } from './styles';

type ErrorScreenProps = {
  error: FetchBaseQueryError | SerializedError;
};

type Error = {
  message: string;
};

export function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <UIError>
      <div>
        {(() => {
          if ('data' in error) {
            return (
              <Description>
                <Typography variant="h4">{error.status}. An error occured</Typography>
                <Typography variant="h5">{(error.data as Error).message}</Typography>
              </Description>
            );
          }
          return <Typography>An error occured. Check the network tab</Typography>;
        })()}
      </div>
    </UIError>
  );
}
