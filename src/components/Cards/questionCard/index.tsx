import React from 'react';
import BaseCard from '../baseCard';
import { Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import svgIcon from 'public/message.svg';

const HeaderAk = (): React.ReactNode => {
  return (
    <Grid container alignItems={'center'}>
      <Grid item xs={9} alignItems={'center'} container>
        <Image
          src="/static/assets/img/alisarmadi.png"
          width={32}
          height={32}
          style={{
            borderRadius: '8px',
            marginLeft: '16px',
          }}
          alt="Picture of the author"
        />
        <Typography variant="subtitle2">مشکل در auth در React</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        container
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography mr={'3px'} variant="caption">
            ساعت :
          </Typography>
          <Typography mr={'8px'} variant="h6">
            16:48
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography ml={'8px'} mr={'3px'} variant="caption">
            تاریخ :
          </Typography>
          <Typography variant="h6">1400/02/15</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={svgIcon} alt="My SVG" width={18} height={18} />
          <Typography
            sx={{
              fontFamily: 'sans-serif !important',
              marginLeft: '5px',
            }}
            variant="caption"
          >
            20
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default function QuestionCard() {
  return (
    <BaseCard header={<HeaderAk />}>
      <Typography variant="body1">body1</Typography>
    </BaseCard>
  );
}
