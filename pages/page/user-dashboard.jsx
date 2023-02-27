import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row } from 'reactstrap';
import DashBoardContain from '../../Components/Pages/UserDashboard/DashBoardContain';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';


const UserDashboard = () => {
  // ROUTER
  const router = useRouter()

  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>

      <section className='section-b-space'>
        <Container>
          <Row>
            {/* LEFT */}
            <Col lg='3'>
              <LeftNavigation active={router.pathname} />
            </Col>

            {/* RİGHT */}
            <Col lg='9'>
              <MobileViewBtn />
              <DashBoardContain />
            </Col>

          </Row>
        </Container>
      </section>

    </Layout1>
  );
};

export async function getServerSideProps({ locale, query, req }) {
  // if token exists redirect into homepage
  if (!req.cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  }
}


export default UserDashboard;
