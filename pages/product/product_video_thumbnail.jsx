import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import ProductSection from '../../Components/Products/Product4ImageContain/ProductSection';
import ProductVideoThumbnailContain from '../../Components/Products/ProductVideoThumbnailContain';
import RecentNotification from '../../Components/Products/RecentNotification';
import StickyFooter from '../../Components/Products/StickyFooter';
import Layout1 from '../../Layout/Layout1';
import { getAPIData } from '../../Utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ProductVideoThumbnail = () => {
  const [productData, setProductData] = useState([]);
  const VideoPlay = true;
  useEffect(() => {
    const types = ['products'];
    types.map((type, i) => {
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
      <BreadCrumb parent={'Product Video Thumbnail'} title={'Product Video Thumbnail'} />
      <ProductVideoThumbnailContain VideoPlay={VideoPlay} productData={productData} />
      <ProductSection productData={productData} />
      <FlowerSubscribe />
      <RecentNotification />
      <StickyFooter productData={productData} />
    </Layout1>
  );
};

export default ProductVideoThumbnail;
