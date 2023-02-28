import Head from 'next/head';
import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Table, Input, FormGroup, Label, Form } from 'reactstrap';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseURL } from '../../constants/baseurl';
import { toast } from 'react-toastify';
import { Country, State, City }  from 'country-state-city';


const UserNotifications = ({ discountEmails, productsMayInterested, token }) => {
  // ROUTER
  const router = useRouter()

  // STATES
  const [discountEmail, setDiscountEmail] = useState(discountEmails)
  const [productsInterested, setProductsInterested] = useState(productsMayInterested)


  // Save changes
  const handleSaveChanges = async () => {
    try {
      await axios.post(`${baseURL}/user/change-user-notifications`,
        {
          discountEmails: discountEmail,
          productsMayInterested: productsInterested,
        },
        { headers: { "Authorization": `Bearer ${token}` } })
      toast.success("Changes saved.")
      setTimeout(() => {
        router.reload()
      }, 1500)
    } catch (error) {
      console.log(error)
    }
  }

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
                <h3>Notification Settings</h3>
              </div>

              <div>
                <Row>
                  <Col lg="8" className='mb-2'>
                    <div class="form-check form-switch d-flex justify-content-between p-0">
                      <label class="form-check-label" for="flexSwitchCheckChecked">Discount Emails</label>
                      <Input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={() => setDiscountEmail(!discountEmail)}
                        style={{ fontSize: "20px" }}
                        checked={discountEmail}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col lg="8" className='mb-2'>
                    <div class="form-check form-switch d-flex justify-content-between p-0">
                      <label class="form-check-label" for="flexSwitchCheckChecked">Products you might be interested</label>
                      <Input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={() => setProductsInterested(!productsInterested)}
                        style={{ fontSize: "20px" }}
                        checked={productsInterested}
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              <Row>
                <Col lg="8" className='mb-2'>
                  <div className='d-flex justify-content-end mt-3'>
                    <Button className='btn btn-success' onClick={() => handleSaveChanges()}>Save changes</Button>
                  </div>
                </Col>
              </Row>
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
  // fetch user data from server
  const { data } = await axios.get(`${baseURL}/user/get-user-info`, { headers: { "Authorization": `Bearer ${req.cookies.token}` } })

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      discountEmails: data.notifications.discountEmails,
      productsMayInterested: data.notifications.productsMayInterested,
      token: req.cookies.token
    },
  }
}

export default UserNotifications;
