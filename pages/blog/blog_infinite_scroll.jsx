import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogInfiniteScroll from '../../Components/Blog/BlogInfiniteScroll';
import { CommonPath } from '../../Components/Constant';
import BreadCrumb from '../../Components/Element/BreadCrumb';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import Layout1 from '../../Layout/Layout1';
import { getAllUsers } from '../../Service/FetchApi';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const Blog_infinite_scroll = () => {
  const dispatch = useDispatch();
  const types = 'GETBLOGDATA';
  const { Blogdatanew } = useSelector((state) => state.BlogReducer);
  useEffect(() => {
    !Blogdatanew && dispatch(getAllUsers('blog', types));
  }, []);
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <BreadCrumb parent={'Blog Infinite Scroll'} title={'Blog Infinite Scroll'} />
      <BlogInfiniteScroll />
      <FlowerSubscribe />
    </Layout1>
  );
};

export default Blog_infinite_scroll;
