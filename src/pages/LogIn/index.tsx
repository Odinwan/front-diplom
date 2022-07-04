import type { NextPage } from 'next';
import withGlobalContext, { WithGlobalContextContextData } from '@/contexts/withGlobalContext';
import SignIn from '@/components/common/LogIn';

type Props = WithGlobalContextContextData<NextPage>

const Home = (props: Props) => {
  return <SignIn />;
};

export default withGlobalContext(Home);
