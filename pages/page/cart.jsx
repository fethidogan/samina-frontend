import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import ProductCart from '../../Components/Pages/Cart';
import Layout1 from '../../Layout/Layout1';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe/index';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Cart = () => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Cart'} title={'Cart'} />
      <ProductCart />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default Cart;
