import Head from 'next/head';
import React from 'react';
import BlogMasonaryContain from '../../Components/Blog/BlogMasonary';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import Layout1 from '../../Layout/Layout1';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const BlogMasonary = () => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Blog Masonary'} title={'Blog Masonary'} />
      <BlogMasonaryContain />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default BlogMasonary;
