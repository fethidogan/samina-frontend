import React from 'react';
import Head from 'next/head';
import { CommonPath } from '../../../Components/Constant';
import BreadCrumb from '../../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../../Components/FlowerDemo/FlowerSubscribe';
import ElementButtonContain from '../../../Components/VoxoPlus/ElementPage/ElementButtonContain';
import Layout1 from '../../../Layout/Layout1';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ElementButton = () => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Element Button'} title={'Element Button'} />
      <ElementButtonContain />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default ElementButton;
