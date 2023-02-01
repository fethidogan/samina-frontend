import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath, VegetableStore } from '../../Components/Constant';
import FashionService from '../../Components/FashionDemo/FashionService';
import FlowerBrand from '../../Components/FlowerDemo/FlowerBrand';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import FreshFruit from '../../Components/VegetablesDemo/FreshFruit';
import VegetableDeal from '../../Components/VegetablesDemo/VegetableDeal';
import VegetableFresh from '../../Components/VegetablesDemo/VegetableFresh';
import VegetableHomeSlider from '../../Components/VegetablesDemo/VegetableHomeSlider';
import VegetableHurryUp from '../../Components/VegetablesDemo/VegetableHurryUp';
import VegetableNewsUpdate from '../../Components/VegetablesDemo/VegetableNewsUpdate';
import VegetableOffer from '../../Components/VegetablesDemo/VegetableOffers';
import VegetablePromo from '../../Components/VegetablesDemo/VegetablePromo';
import VegetableTopBanner from '../../Components/VegetablesDemo/VegetableTopBanner';
import Layout6 from '../../Layout/Layout6';
import { getAPIData } from '../../Utils';
import StartModel from '../../Layout/Element/StartModel';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Vegetable = () => {
  const [bannerData, setBannerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [mainSlider, setMainSlider] = useState([]);
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', '#51983c');
    const types = ['banner', 'products', 'homeslider'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'banner' && setBannerData(res?.data);
        type === 'products' && setProductData(res?.data);
        type === 'homeslider' && setMainSlider(res?.data);
      });
    });
  }, []);
  const isCategories = true;
  const removePadding = true;
  const addBgColor = true;
  return (
    <Layout6 isCategories={isCategories}>
      <Head>
        <title>{VegetableStore}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/6.png`} />
      </Head>
      <VegetableHomeSlider mainSlider={mainSlider} />
      <FashionService removePadding={removePadding} />
      <VegetableTopBanner bannerData={bannerData} />
      <VegetableFresh productData={productData} />
      <VegetableOffer bannerData={bannerData} />
      <VegetableDeal bannerData={bannerData} />
      <VegetablePromo />
      <FreshFruit bannerData={bannerData} />
      <VegetableHurryUp bannerData={bannerData} />
      <VegetableNewsUpdate bannerData={bannerData} />
      <FlowerSubscribe addBgColor={addBgColor} />
      <FlowerBrand />
      <StartModel />
    </Layout6>
  );
};
export default Vegetable;
