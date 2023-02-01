import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { CommonPath } from '../../../Components/Constant';
import BreadCrumb from '../../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../../Components/FlowerDemo/FlowerSubscribe';
import ProductSection from '../../../Components/Products/Product4ImageContain/ProductSection';
import ProductLeftSidebarContain from '../../../Components/Products/ProductLeftSidebarContain';
import RecentNotification from '../../../Components/Products/RecentNotification';
import StickyFooter from '../../../Components/Products/StickyFooter';
import Layout1 from '../../../Layout/Layout1';
import { getAPIData } from '../../../Utils';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ProductDetailsByID = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        getAPIData(`${process.env.API_URL}products`).then((res) => {
            setProductData(res?.data);
        })
    }, []);
    return (
        <Layout1>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
            </Head>
            <BreadCrumb parent={'Product Left Sidebar'} title={'Product Left Sidebar'} />
            <ProductLeftSidebarContain productData={productData} />
            <ProductSection productData={productData} />
            <FlowerSubscribe />
            <RecentNotification />
            <StickyFooter productData={productData} />
        </Layout1>
    )
}

export default ProductDetailsByID