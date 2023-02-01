import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useEffect } from 'react';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import Layout1 from '../../Layout/Layout1';
import ShopLeftSidebarContain from '../../Components/Shop/ShopLeftSidebarContain';
import { getAPIData } from '../../Utils';
import CanvasOffset from '../../Components/Shop/ShopCanvasFilter/CanvasOffset';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });
const ShopList = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const types = ['products'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'products' && setProductData(res?.data);
      });
    });
  }, []);
  const listGrid = true;
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Shop List'} title={'Shop List'} />
      <ShopLeftSidebarContain productData={productData} listGrid={listGrid} />
      <FlowerSubscribe />
      <CanvasOffset productData={productData} />
    </Layout1>
  );
};

export default ShopList;
