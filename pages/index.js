import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CommonPath } from '../Components/Constant';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/layout/fashion')
  }, [])
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
    </>
  );
}
