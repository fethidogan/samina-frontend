import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../../Components/Constant';
import BreadCrumb from '../../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../../Components/FlowerDemo/FlowerSubscribe';
import PortfolioMasonaryContain from '../../../Components/VoxoPlus/PortfolioPage/PortfolioMasonary';
import Layout1 from '../../../Layout/Layout1';
import { getAllUsers } from '../../../Service/FetchApi';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const PortfolioNoSpace = () => {
  const dispatch = useDispatch();
  const types = 'GETPORTFOLIODATA';
  const { portfoliodata } = useSelector((state) => state.PortfolioReducer);
  useEffect(() => {
    !portfoliodata && dispatch(getAllUsers('portfolio', types));
  }, []);
  const colclass = 'col-lg-4 col-md-12';
  const masonaryclass = 3;
  const rowclass = 'g-0';
  const noSpace = true;
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Portfolio Masonary'} title={'Portfolio Masonary'} />
      <PortfolioMasonaryContain portfoliodata={portfoliodata} colclass={colclass} masonaryclass={masonaryclass} rowclass={rowclass} noSpace={noSpace} />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default PortfolioNoSpace;
