import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../Components/Constant';
import RegisterSection from '../../Components/Pages/Register/RegisterSection';
import ThemeCustomizer from '../../Layout/Common/Customizer';

const Register = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <RegisterSection />
      <ThemeCustomizer />
    </>
  );
};

export default Register;
