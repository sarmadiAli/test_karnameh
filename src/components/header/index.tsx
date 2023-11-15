import React from 'react';
import { StyledBox } from './styled';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from 'next/router';
export default function HeaderComponent({ title }: { title: string }) {
  const router = useRouter();

  return (
    <StyledBox>
      <Grid container className="headerContainer" alignItems={'center'}>
        <Grid item xs={8}>
          <Typography variant="h6" component={'h3'}>
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={4}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Grid item xs={5}>
            <Button
              sx={{ padding: '8px 26px' }}
              variant="contained"
              onClick={() => {
                router.push('/question/2', undefined, { shallow: true });
              }}
              color="primary"
              startIcon={<AddIcon sx={{ marginRight: '10px' }} />}
            >
              <Typography fontSize={'14px'}>سوال جدید</Typography>
            </Button>
          </Grid>
          <Grid container item xs={7} justifyContent={'flex-end'}>
            <Image
              src="/static/assets/img/alisarmadi.png"
              width={60}
              height={60}
              style={{
                borderRadius: '44px',
                border: '3px solid  #E4E9EC',
                marginLeft: '8px',
              }}
              alt="Picture of the author"
            />
            <Button
              variant="text"
              endIcon={<ArrowDropDownIcon color="secondary" />}
            >
              <Typography color={'#454545'} component={'h3'} fontWeight={700}>
                علی سرمدی
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>
  );
}
