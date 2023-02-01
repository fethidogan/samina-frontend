import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../Components/Constant';
import LoginContain from '../../Components/Pages/Login/LoginContain';
import ThemeCustomizer from '../../Layout/Common/Customizer';

const Logins = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <LoginContain />
      <ThemeCustomizer />
    </>
  );
};

export default Logins;
