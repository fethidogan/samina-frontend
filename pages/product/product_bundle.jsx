import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ProductBundleContain from '../../Components/Products/ProductBundle';
import Layout1 from '../../Layout/Layout1';
import ProductSection from '../../Components/Products/Product4ImageContain/ProductSection';
import { getAPIData } from '../../Utils';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ProductBundle = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const types = ['products'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'products' && setProductData(res?.data);
      });
    });
  }, []);
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Product Bundle'} title={'Product Bundle'} />
      <ProductBundleContain />
      <ProductSection productData={productData} />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default ProductBundle;
