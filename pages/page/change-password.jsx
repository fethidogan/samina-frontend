import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Table, Input, FormGroup, Label, Form } from 'reactstrap';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const ChangePassword = () => {
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
                <h3>Change Password</h3>
              </div>
              <Form>

                <div>
                  <Row>
                    <Col lg="6" className='mb-2'>
                      <Input
                        type='text'
                        placeholder='Current Password'
                        name='phone'
                        id='phone'
                        required
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg="6" className='mb-2'>
                      <Input
                        type='text'
                        placeholder='New Password'
                        name='phone'
                        id='phone'
                        required
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg="6" className='mb-2'>
                      <Input
                        type='text'
                        placeholder='Confirm Password'
                        name='phone'
                        id='phone'
                        required
                      />
                    </Col>
                  </Row>
                </div>

                <div className='d-flex justify-content-end mt-2'>
                  <Button type='submit' className='btn btn-success'>Change Password</Button>
                </div>
              </Form>

            </Col>

          </Row>
        </Container>
      </section>

    </Layout1>
  );
};

export default ChangePassword;
