import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Controller, useForm } from 'react-hook-form';
import useQuestionDetail from 'src/hooks/useQuestionDetail';
import { questionType } from '../globalType';
import QuestionCard from '../Cards/questionCard';
import BaseCard from '../Cards/baseCard';
import CardHeader from '../Cards/header';
import { StyleGrid } from './style';
import useEditQuestion from 'src/hooks/useEditQuestion';

export default function QestionDetail({ id }: any) {
  const { data } = useQuestionDetail(id);
  const { mutate: editQuestion } = useEditQuestion(id);
  const {
    control,
    handleSubmit: handleSubmitForm,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      body: '',
    },
  });
  const onSubmit = (dataForm: { body: string }) => {
    const newComment: questionType = {
      ...data,
      comments: [
        ...data?.comments,
        {
          ...dataForm,
          create_at: new Date().getTime(),
          full_name: 'alisarmadi',
          like: 0,
          dislike: 0,
        },
      ],
    };
    editQuestion(newComment, {
      onSuccess: () => {
        reset();
      },
    });
  };
  const feedBack = (ElementId: number | string, feakBackType: string) => {
    const newState = { ...data };
    let findData = newState.comments[ElementId];
    findData = {
      ...findData,
      [feakBackType]: findData[feakBackType] + 1,
    };
    newState.comments[ElementId] = findData;
    editQuestion(newState, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <StyleGrid container>
      <Grid xs={12} item>
        <QuestionCard {...{ data }} moreInfo={false} />
      </Grid>
      <Grid container item mt={3}>
        {data?.comments?.length ? (
          <Grid xs={12} mt={3} item>
            <Typography variant="subtitle1">پاسخ ها</Typography>
          </Grid>
        ) : null}
        {data?.comments?.map((ele: any, index: number) => (
          <Grid xs={12} mt={'20px'} item key={index}>
            <BaseCard
              header={
                <CardHeader
                  headerTitle={ele.full_name}
                  renderProps={() => (
                    <>
                      <div
                        style={{ margin: '0 24px' }}
                        className="feedBackContant"
                      >
                        <SentimentSatisfiedOutlinedIcon
                          className="feedBackIcon"
                          style={{
                            color: ' #66cb9f',
                          }}
                        />
                        <Typography variant="caption">{ele.like}</Typography>
                      </div>
                      <div className="feedBackContant">
                        <SentimentDissatisfiedOutlinedIcon
                          className="feedBackIcon"
                          style={{
                            color: '#9CAEBB',
                          }}
                        />
                        <Typography variant="caption">{ele.dislike}</Typography>
                      </div>
                    </>
                  )}
                  {...{ data }}
                />
              }
            >
              <Grid container>
                <Grid xs={12} item>
                  <Typography variant="body1">{ele.body}</Typography>
                </Grid>
                <Grid xs={12} container justifyContent={'flex-end'} item>
                  <Button
                    onClick={() => {
                      feedBack(index, 'dislike');
                    }}
                    startIcon={
                      <SentimentDissatisfiedOutlinedIcon
                        className="feedBackIconBtn"
                        style={{
                          color: 'red',
                        }}
                      />
                    }
                    className="karnamehBtnfeedBack"
                    sx={{
                      marginRight: '8px',
                    }}
                  >
                    <Typography color={'red'}>پاسخ خوب نبود</Typography>
                  </Button>
                  <Button
                    onClick={() => {
                      feedBack(index, 'like');
                    }}
                    startIcon={
                      <SentimentSatisfiedOutlinedIcon
                        className="feedBackIconBtn"
                        style={{
                          color: '#66CB9F',
                        }}
                      />
                    }
                    className="karnamehBtnfeedBack"
                  >
                    <Typography>پاسخ خوب بود</Typography>
                  </Button>
                </Grid>
              </Grid>
            </BaseCard>
          </Grid>
        ))}
        <form
          style={{ width: '100%', padding: '8px 4px' }}
          onSubmit={handleSubmitForm(onSubmit)}
        >
          <Grid xs={12} item container mt={2}>
            <Grid xs={12} item container>
              <Typography variant="subtitle1">پاسخ خود را ثبت کنید</Typography>
            </Grid>
            <Grid xs={12} item container mt={2} mb={1}>
              <Typography> پاسخ خود را بنویسد</Typography>
            </Grid>
            <Grid xs={12} item container>
              <Controller
                name="body"
                rules={{
                  required: {
                    value: true,
                    message: 'این فیلد الزامی است',
                  },
                }}
                control={control}
                render={({ field }) => (
                  <TextField
                    id="body"
                    className="karnameTextFeild"
                    fullWidth
                    placeholder="متن پاسخ"
                    {...field}
                    minRows={8}
                    multiline
                    data-testid="karnameTextFeild"
                  />
                )}
              />
            </Grid>
            {errors?.body && (
              <Grid xs={12} mb={2} item container>
                <Typography color={'red'}>{errors?.body?.message}</Typography>
              </Grid>
            )}

            <Grid xs={2} item container mt={2}>
              <Button type="submit" fullWidth variant="contained">
                <Typography variant="h6">ارسال پاسخ</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </StyleGrid>
  );
}
