import { Button, Grid, TextField, Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';
import { getQuestionDetail } from '../../services';
import { useParams } from 'next/navigation';
import QuestionCard from '../../components/Cards/questionCard';
import useQuestionDetail from '../../hooks/useQuestionDetail';
import { GetServerSidePropsContext } from 'next';
import BaseCard from '../../components/Cards/baseCard';
import CardHeader from '../../components/Cards/header';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Controller, useForm } from 'react-hook-form';
import useEditQuestion from '../../hooks/useEditQuestion';

function Questions() {
  const { id } = useParams();
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
  const onSubmit = (dataForm: any) => {
    const newComment = {
      ...data,
      comments: [
        ...data.comments,
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
  const feadBack = (ElementId: number | string, feakBackType: string) => {
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
    <Grid container>
      <Grid xs={12} item>
        <QuestionCard {...{ data }} moreInfo={false} />
      </Grid>
      <Grid container item mt={3}>
        <Grid xs={12} mt={3} item>
          <Typography variant="subtitle1">پاسخ ها</Typography>
        </Grid>
        {data?.comments?.map((ele: any, index: number) => (
          <Grid xs={12} mt={'20px'} item key={ele.id}>
            <BaseCard
              header={
                <CardHeader
                  headerTitle={ele.full_name}
                  renderProps={() => (
                    <>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          margin: '0 24px',
                        }}
                      >
                        <SentimentSatisfiedOutlinedIcon
                          style={{
                            fontSize: '18px',
                            fontWeight: '400',
                            color: '#66CB9F',
                            marginLeft: '3px',
                          }}
                        />
                        <Typography variant="caption">{ele.like}</Typography>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <SentimentDissatisfiedOutlinedIcon
                          style={{
                            fontSize: '18px',
                            fontWeight: '400',
                            marginLeft: '3px',
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
                      feadBack(index, 'dislike');
                    }}
                    startIcon={
                      <SentimentDissatisfiedOutlinedIcon
                        style={{
                          fontSize: '16px',
                          fontWeight: '400',
                          marginLeft: '3px',
                          color: 'red',
                        }}
                      />
                    }
                    className="karnamehBtnFeadBack"
                    sx={{
                      marginRight: '8px',
                    }}
                  >
                    <Typography color={'red'}>پاسخ خوب نبود</Typography>
                  </Button>
                  <Button
                    onClick={() => {
                      feadBack(index, 'like');
                    }}
                    startIcon={
                      <SentimentSatisfiedOutlinedIcon
                        style={{
                          fontSize: '18px',
                          fontWeight: '400',
                          color: '#66CB9F',
                          marginLeft: '3px',
                        }}
                      />
                    }
                    className="karnamehBtnFeadBack"
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
                  />
                )}
              />
            </Grid>
            {errors?.body && (
              <Grid xs={12} mb={2} item container>
                <Typography color={'red'}>{errors?.body?.message}</Typography>
              </Grid>
            )}

            <Grid xs={2} item container>
              <Button type="submit" fullWidth variant="contained">
                <Typography variant="h6">ارسال پاسخ</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
Questions.setPageConfig = {
  headerTitle: 'جزییات سوال',
};
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  try {
    if (ctx?.params?.id) {
      const questions = await getQuestionDetail('/questions', ctx?.params?.id);
      await queryClient.fetchQuery(['questionDetails'], () => questions);
    }
  } catch (error) {}

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Questions;
