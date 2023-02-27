import Head from 'next/head';
import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Input, FormGroup } from 'reactstrap';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } });

const AccountSettings = () => {
  // ROUTER
  const router = useRouter()

  // STATES
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [fullName, setFullName] = useState("")

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
                <h3>Account Settings</h3>
              </div>

              <div className='mb-2'>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <Input type="select" name="country" id="country" defaultValue="country" style={{ backgroundColor: "white" }}>
                        <option selected>Country</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <Input type="select" name="city" id="city" defaultValue="city" style={{ backgroundColor: "white" }}>
                        <option selected>City</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              <div className='input'>
                <Input
                  type='textarea'
                  placeholder='Address'
                  name='address'
                  id='address'
                  required
                />
                <span className='spin'></span>
                <div className='valid-feedback'>Address</div>
              </div>

              <div>
                <Row>
                  <Col lg="4" className='mb-2'>
                    <Input
                      type='text'
                      placeholder='Phone Number'
                      name='phone'
                      id='phone'
                      required
                    />
                  </Col>
                  <Col lg="4" className='mb-2'>
                    <Input
                      type='text'
                      placeholder='Zip Code'
                      name='phone'
                      id='phone'
                      required
                    />
                  </Col>
                  <Col lg="4" className='mb-2'>
                    <Input
                      type='text'
                      placeholder='Full Name'
                      name='name'
                      id='name'
                      required
                    />
                  </Col>
                </Row>
              </div>

              <div className='d-flex justify-content-end mt-2'>
                <Button className='btn btn-success'>Save Account Settings</Button>
              </div>

            </Col>
            {/* <AllTabContain activeTab={activeTab} num={num} /> */}

          </Row>
        </Container>
      </section>

    </Layout1>
  );
};

export default AccountSettings;
