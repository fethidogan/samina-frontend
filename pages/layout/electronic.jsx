import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath, ElectronicStore } from '../../Components/Constant';
import ElectronicCollection from '../../Components/ElectronicDemo/ElectronicCollection';
import ElectronicDeal from '../../Components/ElectronicDemo/ElectronicDeal';
import ElectronicHomeSlider from '../../Components/ElectronicDemo/ElectronicHomeSlider';
import ElectronicHurryUp from '../../Components/ElectronicDemo/ElectronicHurryUp';
import ElectronicInstagramShop from '../../Components/ElectronicDemo/ElectronicInstagramShop';
import ElectronicTopBanner from '../../Components/ElectronicDemo/ElectronicTopBanner';
import ElectronicVR from '../../Components/ElectronicDemo/ElectronicVR';
import FashionService from '../../Components/FashionDemo/FashionService';
import FlowerBrand from '../../Components/FlowerDemo/FlowerBrand';
import Layout4 from '../../Layout/Layout4';
import { getAPIData } from '../../Utils';
import StartModel from '../../Layout/Element/StartModel';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Electronic = () => {
  const [bannerData, setBannerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [mainSlider, setMainSlider] = useState([]);
  const [tabSection, setTabSection] = useState([]);
  const isCategories = true;
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', '#0163d2');
    const types = ['banner', 'products', 'homeslider', 'categorybanner', 'tabsection'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'banner' && setBannerData(res?.data);
        type === 'products' && setProductData(res?.data);
        type === 'homeslider' && setMainSlider(res?.data);
        type === 'tabsection' && setTabSection(res?.data);
      });
    });
  }, []);
  const removePadding = true;
  return (
    <Layout4 isCategories={isCategories}>
      <Head>
        <title>{ElectronicStore}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/1.png`} />
      </Head>
      <ElectronicHomeSlider mainSlider={mainSlider} />
      <FashionService removePadding={removePadding} />
      <ElectronicTopBanner bannerData={bannerData} />
      <ElectronicCollection productData={productData} />
      <ElectronicDeal bannerData={bannerData} />
      <ElectronicVR productData={productData} />
      <ElectronicHurryUp tabSection={tabSection} />
      <ElectronicInstagramShop bannerData={bannerData} />
      <FlowerBrand />
      <StartModel />
    </Layout4>
  );
};
export default Electronic;
