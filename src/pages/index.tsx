import { dehydrate, QueryClient } from '@tanstack/react-query';
import { Grid } from '@mui/material';
import usePosts from '../hooks/useQuestions';
import { getPosts } from '../services';
import QuestionCard from '../components/Cards/questionCard';
function Home() {
  const { data, isLoading } = usePosts();
  if (isLoading) return <div>Loading</div>;

  return (
    <Grid container spacing={2}>
      {data.map((data: any) => {
        return (
          <Grid item xs={12} key={data.id}>
            <QuestionCard />
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
    const posts = await getPosts('/posts');
    await queryClient.fetchQuery(['posts'], () => posts);
  } catch (error) {}

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
