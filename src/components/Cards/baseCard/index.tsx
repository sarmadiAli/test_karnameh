import { Grid } from '@mui/material';

import React from 'react';
import { BaseCardStyled } from './styled';

interface BaseCardProps {
  children: React.ReactElement;
  header: React.ReactElement;
  style?: React.CSSProperties;
}
function BaseCard({ children, header, style }: BaseCardProps) {
  return (
    <BaseCardStyled style={style} variant="outlined">
      <Grid container>
        {/* start Header section */}
        <Grid item xs={12} container className="baseCardHeader">
          {header}
        </Grid>
        {/* end Header section */}
        {/* ====================================== **_** ======================================= */}
        {/* start body section */}
        <Grid item xs={12} container className="baseBaseHeader">
          {children}
        </Grid>
        {/* end body section */}
      </Grid>
    </BaseCardStyled>
  );
}

export default BaseCard;
