import type { NextPage } from 'next';
import withGlobalContext, { WithGlobalContextContextData } from '@/contexts/withGlobalContext';
import SignIn from '@/components/common/LogIn';

type Props = WithGlobalContextContextData<NextPage>

const Home = (props: Props) => {
  return <div>
    home
  </div>;
};

export default withGlobalContext(Home);
