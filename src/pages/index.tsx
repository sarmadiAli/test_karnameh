import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Grid } from '@mui/material';
import usequestions from 'src/hooks/useQuestions';
import { getQuestion } from 'src/services';
import QuestionCard from 'src/components/Cards/questionCard';

function Home() {
  const { data, isLoading } = usequestions();
  if (isLoading) return <div>Loading</div>;

  return (
    <Grid data-testid="akabr" container spacing={2}>
      {data?.map((data: any) => {
        return (
          <Grid item xs={12} key={data.id}>
            <QuestionCard moreInfo={true} {...{ data }} />
          </Grid>
        );
      })}
    </Grid>
  );
}

Home.setPageConfig = {
  headerTitle: 'لیست سوالات',
};
export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    const questions = await getQuestion('/questions');
    await queryClient.fetchQuery(['questions'], () => questions);
  } catch (error) {}

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
