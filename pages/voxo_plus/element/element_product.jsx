import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { CommonPath } from '../../../Components/Constant';
import BreadCrumb from '../../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../../Components/FlowerDemo/FlowerSubscribe';
import Layout1 from '../../../Layout/Layout1';
import ElementProductContain from '../../../Components/VoxoPlus/ElementPage/ElementProductContain';
import { getAPIData } from '../../../Utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ElementProducts = () => {
  const [productData, setProductData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    const types = ['products', 'banner'];
    types.map((type, i) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'products' && setProductData(res?.data);
        type === 'banner' && setBannerData(res?.data);
      });
    });
  }, []);
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Element Product'} title={'Element Product'} />
      <ElementProductContain productData={productData} bannerData={bannerData} />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default ElementProducts;
