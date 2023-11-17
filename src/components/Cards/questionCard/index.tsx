import React from 'react';
import BaseCard from '../baseCard';
import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import CardHeader from '../header';
import svgIcon from 'public/message.svg';
import Image from 'next/image';

export default function QuestionCard({ data, moreInfo }: any) {
  return (
    <BaseCard
      header={
        <CardHeader
          headerTitle={data.subject}
          renderProps={() => (
            <>
              <Image src={svgIcon} alt="My SVG" width={18} height={18} />
              <Typography
                sx={{
                  fontFamily: 'sans-serif !important',
                  marginLeft: '5px',
                }}
                variant="caption"
              >
                {data?.comments?.length}
              </Typography>{' '}
            </>
          )}
          {...{ data }}
        />
      }
    >
      <Grid container>
        <Grid xs={12} item>
          <Typography variant="body1">{data?.body}</Typography>
        </Grid>
        {moreInfo && (
          <Grid xs={12} container justifyContent={'flex-end'} item>
            <Link href={`/question/${data?.id}`}>
              <Button
                style={{ padding: '8px 16px' }}
                variant="outlined"
                color="primary"
              >
                <Typography variant="h6">مشاهده جزییات</Typography>
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </BaseCard>
  );
}
