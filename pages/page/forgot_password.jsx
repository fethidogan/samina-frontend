import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../Components/Constant';
import ForgotPasswordSection from '../../Components/Pages/ForgotPassword/ForgotPasswordSection';
import ThemeCustomizer from '../../Layout/Common/Customizer';

const ForgotPassword = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <ForgotPasswordSection />
      <ThemeCustomizer />
    </>
  );
};

export default ForgotPassword;
