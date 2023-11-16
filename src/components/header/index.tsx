import React from 'react';
import { StyledBox } from './styled';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import dynamic from 'next/dynamic';

const CodeSampleModal = dynamic(() => import('../createQuestion'), {
  ssr: false,
});
export default function HeaderComponent({ title }: { title?: string }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <StyledBox>
      <Grid container className="headerContainer" alignItems={'center'}>
        <Grid
          item
          width={{
            xs: '30%',
            md: '60%',
            lg: '70%',
          }}
        >
          <Typography variant="subtitle1" component={'h3'}>
            {title}
          </Typography>
        </Grid>
        <Grid
          width={{
            xs: '70%',
            md: '40%',
            lg: '30%',
          }}
          item
          container
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Grid item xs={4}>
            <Button
              fullWidth
              sx={{ padding: '8px' }}
              variant="contained"
              onClick={() => {
                setIsModalOpen(true);
              }}
              color="primary"
              startIcon={<AddIcon sx={{ marginRight: '5px' }} />}
            >
              <Typography fontSize={'14px'}>سوال جدید</Typography>
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={8}
            alignItems={'center'}
            justifyContent={'flex-end'}
          >
            <Image
              src="/static/assets/img/alisarmadi.png"
              width={44}
              height={44}
              className="profileImg"
              alt="Picture of the author"
            />
            <Typography
              color={'#454545'}
              mr="8px"
              component={'h3'}
              fontWeight={700}
            >
              علی سرمدی
            </Typography>
            <IconButton>
              <ArrowDropDownIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      {isModalOpen && (
        <CodeSampleModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </StyledBox>
  );
}
