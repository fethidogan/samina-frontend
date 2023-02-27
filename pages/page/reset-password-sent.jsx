import Head from 'next/head';
import React from 'react';
import { CommonPath } from '../../Components/Constant';
import FlowerSubscribe from '../../Components/FlowerDemo/FlowerSubscribe';
import OrderDetails from '../../Components/Pages/OrderSuccess/OrderDetails';
import TopSection from '../../Components/Pages/OrderSuccess/TopSection';
import Layout1 from '../../Layout/Layout1';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { OrderSuccessSvg } from '../../Data/SVG';
import { Button, Col, Container, Row } from 'reactstrap';
import Link from 'next/link';

const ResetPasswordSend = ({ email }) => {
  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>
      <section className='pt-0'>
        <Container fluid={true}>
          <Row>
            <Col xs='12' className='p-0'>
              <div className='success-icon'>
                <div className='main-container'>
                  <div className='check-container'>
                    <div className='check-background'>
                      <img src='/assets/images/fashion/email-verify.jpg' width={70} height={70} />
                    </div>
                    <div className='check-shadow'></div>
                  </div>
                </div>

                <div className='success-contain'>
                  <h4>Reset Email Sent</h4>
                  <h5 className='font-light'>We have sent a reset password link to your <span style={{ fontWeight: "bold" }}>{email}</span> email. Please check your email.</h5>
                  <Link href='/'>
                    <Button className='btn btn-success mt-5' style={{ borderRadius: "5px" }}>Go to Homepage</Button>
                  </Link>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Layout1>
  );
};

export async function getServerSideProps({ locale, query }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      email: query.email
    },
  }
}


export default ResetPasswordSend;
