import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../../Components/Constant';
import BreadCrumb from '../../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../../Components/FlowerDemo/FlowerSubscribe';
import ElementCollectionContain from '../../../Components/VoxoPlus/ElementPage/ElementCollection';
import Layout1 from '../../../Layout/Layout1';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ElementCollectionBanner = () => {
    
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Element Collection Banner'} title={'Element Collection Banner'} />
      <ElementCollectionContain />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default ElementCollectionBanner;
