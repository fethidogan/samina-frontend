import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import CanvasOffset from '../../Components/Shop/ShopCanvasFilter/CanvasOffset';
import ShopNoSidebarContain from '../../Components/Shop/ShopNoSidebar';
import Layout1 from '../../Layout/Layout1';
import { getAPIData } from '../../Utils';

const ShopNoSidebar = () => {
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
      <BreadCrumb parent={'Shop No Sidebar'} title={'Shop No Sidebar'} />
      <ShopNoSidebarContain productData={productData} />
      <FlowerSubscribe />
      <CanvasOffset productData={productData} />
    </Layout1>
  );
};
export default ShopNoSidebar;
