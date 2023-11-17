import { QueryClient, dehydrate } from '@tanstack/react-query';
import React from 'react';
import { getQuestionDetail } from '../../services';
import { GetServerSidePropsContext } from 'next';
import QestionDetail from 'src/components/qestionDetail';
import { useParams } from 'next/navigation';

function Questions() {
  const { id } = useParams();

  return <QestionDetail id={id} />;
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
