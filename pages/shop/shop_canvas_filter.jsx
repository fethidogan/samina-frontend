import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout1 from '../../Layout/Layout1';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ShopCanvasFilterContain from '../../Components/Shop/ShopCanvasFilter';
import { getAPIData } from '../../Utils';
import CanvasOffset from '../../Components/Shop/ShopCanvasFilter/CanvasOffset';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ShopCanvasFilter = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const types = ['products'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'products' && setProductData(res?.data);
      });
    });
  }, []);
  const grid5 = true;
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Shop Canvas Filter'} title={'Shop Canvas Filter'} />
      <ShopCanvasFilterContain productData={productData} grid5={grid5} />
      <FlowerSubscribe />
      <CanvasOffset productData={productData} />
    </Layout1>
  );
};

export default ShopCanvasFilter;
