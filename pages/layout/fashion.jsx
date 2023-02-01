import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout1 from '../../Layout/Layout1';
import FashionHomeSlider from '../../Components/FashionDemo/FashionHomeSlider';
import FashionBannerTop from '../../Components/FashionDemo/FashionBannerTop';
import FashionNewArrival from '../../Components/FashionDemo/FashionNewArrival';
import FashionCategory from '../../Components/FashionDemo/FashionCategory';
import FashionBannerMiddle from '../../Components/FashionDemo/FashionBannerMiddle';
import FashionNewProduct from '../../Components/FashionDemo/FashionNewProduct';
import FashionDeal from '../../Components/FashionDemo/FashionDeal';
import FashionInstagram from '../../Components/FashionDemo/FashionInstagram';
import FashionService from '../../Components/FashionDemo/FashionService';
import { getAPIData } from '../../Utils';
import { CommonPath, FashionStore } from '../../Components/Constant';
import StartModel from '../../Layout/Element/StartModel';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Fashion = () => {
  const [bannerData, setBannerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [mainSlider, setMainSlider] = useState([]);
  const [categoryBanner, setCategoryBanner] = useState([]);
  const router = useRouter();
  const isCookie = router.pathname;
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', '#e22454');
    const types = ['banner', 'products', 'homeslider', 'categorybanner'];
    types.map((type) => {
      getAPIData(`${process.env.API_URL}${type}`).then((res) => {
        type === 'banner' && setBannerData(res?.data);
        type === 'products' && setProductData(res?.data);
        type === 'homeslider' && setMainSlider(res?.data);
        type === 'categorybanner' && setCategoryBanner(res?.data);
      });
    });
  }, []);

  return (
    <Layout1 isCookie={isCookie}>
      <Head>
        <title>{FashionStore}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <FashionHomeSlider mainSlider={mainSlider} />
      <FashionBannerTop bannerData={bannerData} />
      <FashionNewArrival productData={productData} />
      <FashionCategory categoryBanner={categoryBanner} />
      <FashionBannerMiddle bannerData={bannerData} />
      <FashionNewProduct productData={productData} />
      <FashionDeal bannerData={bannerData} />
      <FashionInstagram bannerData={bannerData} />
      <FashionService />
      <StartModel />
    </Layout1>
  );
};
export default Fashion;
