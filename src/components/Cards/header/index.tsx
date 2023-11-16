import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import moment from 'moment-jalaali';

const CardHeader = ({
  data,
  headerTitle,
  renderProps,
}: any): React.ReactNode => {
  const date = moment(+data?.create_at).format('jYYYY/jMM/jDD');
  const time = moment(+data?.create_at).format('HH:mm');
  return (
    <Grid container alignItems={'center'}>
      <Grid
        sx={{
          order: {
            xs: '1',
            md: '0',
          },
          marginTop: { xs: '5px' },
        }}
        item
        xs={12}
        md={8}
        lg={9}
        alignItems={'center'}
        container
      >
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
        <Typography variant="subtitle2"> {headerTitle} </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={3}
        container
        justifyContent={{
          xs: 'space-between',
          lg: 'space-between',
        }}
        alignItems={'center'}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography mr={'3px'} variant="caption">
            ساعت :
          </Typography>
          <Typography mr={'8px'} variant="h6">
            {time}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography ml={'8px'} mr={'3px'} variant="caption">
            تاریخ :
          </Typography>
          <Typography variant="h6">{date}</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {renderProps(data)}
        </div>
      </Grid>
    </Grid>
  );
};

export default CardHeader;
