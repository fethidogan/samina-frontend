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
import { baseURL } from '../../constants/baseurl';
import axios from 'axios';



const UserOrders = ({ orderData }) => {
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
                <h3>My Orders</h3>
              </div>

              {/* Here will be looped */}
              {orderData.map(order => {
                return (
                  <Container key={order._id} className='p-2' style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <p>Order id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;#{order.invoice}</p>
                        <p>Order Total &nbsp;&nbsp;: &nbsp;$ {order.total}</p>
                        <p>Order Date &nbsp; : &nbsp; 11-11-2023</p>
                      </div>
                      <Link href={'/page/cart'} className='btn btn-solid-default btn-sm fw-bold'>
                        View Order
                      </Link>
                    </div>
                    <hr />
                    {order.cart.map((individualProduct) => {
                      return (
                        <Link href={individualProduct.product.slug}>
                          <div className='d-flex mt-2' key={individualProduct._id}>
                            <img src={individualProduct.product.image[0]} width={120} height={100} style={{ borderRadius: "5px" }} />
                            <div style={{ marginLeft: "20px", color: "black" }}>
                              <p>Product</p>
                              <p>{individualProduct.product.title}</p>
                            </div>
                            <div style={{ marginLeft: "20px", color: "black" }}>
                              <p>Quantity</p>
                              <p>{individualProduct.quantity} pcs</p>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </Container>
                )
              })}
              {orderData.length === 0 &&
                <>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3>You have no orders.</h3>
                    <Link href="/">
                      <Button className='btn btn-success mt-3'>Go to shopping</Button>
                    </Link>
                  </div>
                </>
              }

            </Col>

          </Row>
        </Container>
      </section>

    </Layout1 >
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
  const { data } = await axios.get(`${baseURL}/user/get-user-orders`, { headers: { "Authorization": `Bearer ${req.cookies.token}` } })
  console.log(data.order[0].cart)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      orderData: data.order
    },
  }
}

export default UserOrders;
