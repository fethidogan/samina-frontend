import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Table } from 'reactstrap';
import Link from 'next/link';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';



const UserWishlist = () => {
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

            <Col lg='3'>
              <LeftNavigation active={router.pathname} />
            </Col>
            <Col lg='9'>
              <MobileViewBtn />
              <div className='box-head mb-4'>
                <h3>My Wishlist</h3>
              </div>

              {/* Here will be looped */}
              <Container className='p-2' style={{ border: "1px solid #ddd", borderRadius: "10px" }}>

                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex' >
                    <img src='/assets/images/fashion/product/front/1.jpg' width={100} height={100} style={{ borderRadius: "5px" }} />
                    <div style={{ marginLeft: "20px" }}>
                      <p>Some Good product name will come here</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <Button size='sm' className="btn-success" style={{ borderRadius: "5px" }}>
                      Add to cart
                    </Button>

                    <Button size='sm' className="btn-danger mt-3" style={{ borderRadius: "5px" }}>
                      Remove
                    </Button>
                  </div>
                </div>
              </Container>

            </Col>
            {/* <AllTabContain activeTab={activeTab} num={num} /> */}

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

export default UserWishlist;
