import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../Components/Constant';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import BreadcrumSection from '../../Components/Pages/Faq/BreadCrumSection';
import FaqDetail from '../../Components/Pages/Faq/FaqDetail';
import TopSection from '../../Components/Pages/Faq/TopSection';
import Layout1 from '../../Layout/Layout1';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Faq = () => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadcrumSection />
      <TopSection />
      <FaqDetail />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default Faq;
