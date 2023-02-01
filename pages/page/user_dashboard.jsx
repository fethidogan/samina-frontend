import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import DashboardSidebar from '../../Components/Pages/UserDashboard/DashboardSidebar';
import Layout1 from '../../Layout/Layout1';
import PaymentCardModal from '../../Components/Pages/UserDashboard/PaymentCardModal';
import ProfileModal from '../../Components/Pages/UserDashboard/ProfileModal';
import SaveAddressModal from '../../Components/Pages/UserDashboard/SaveAddressModal';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const UserDashboard = () => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'User Dashboard'} title={'User Dashboard'} />
      <DashboardSidebar />
      <PaymentCardModal />
      <SaveAddressModal />
      <ProfileModal />
    </Layout1>
  );
};

export default UserDashboard;
