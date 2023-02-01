import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../../Components/Constant';
import BreadCrumb from '../../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../../Components/FlowerDemo/FlowerSubscribe';
import ElementCategoryContain from '../../../Components/VoxoPlus/ElementPage/ElementCategoryContain';
import Layout1 from '../../../Layout/Layout1';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ElementCategory = () => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Element Category'} title={'Element Category'} />
      <ElementCategoryContain />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default ElementCategory;
