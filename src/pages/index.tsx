import { CircularProgress } from '@mui/material';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import withGlobalContext, { WithGlobalContextContextData } from '@/contexts/withGlobalContext';
import { useRouter } from 'next/router';

type Props = WithGlobalContextContextData<NextPage>



const Home = (props:Props) => {
  const router = useRouter()
  const { globalContextState } = props;
  const { isAuth } = globalContextState;

  useEffect(() => {
    console.log('isAuth',isAuth);
    if (!isAuth) {
      router.push('/LogIn')
      return
    }

    router.push('/home')
  }, [isAuth]);

  return (
    <>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'100vh',
        width:'100vw'
      }}>
        <CircularProgress />
      </div>
    </>
  );
};

export default withGlobalContext(Home);
