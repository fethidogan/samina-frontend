import Head from 'next/head';
import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Table } from 'reactstrap';
import Link from 'next/link';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';
import axios from 'axios';
import { baseURL } from '../../constants/baseurl';



const UserWishlist = ({ wishlistData, token }) => {
  // ROUTER
  const router = useRouter()

  // handle remove
  const handleRemoveWishlist = async (id) => {
    try {
      await axios.post(`${baseURL}/user/remove-user-wishlist`,
        {
          wishlistId: id
        }, {
        headers: { "Authorization": `Bearer ${token}` }
      })
      router.reload()
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
                <h3>My Wishlist</h3>
              </div>

              {/* Here will be looped */}
              <Container className='p-2' style={{ border: "1px solid #ddd", borderRadius: "10px" }}>
                {wishlistData.map(product => {
                  return (
                    <div className='d-flex justify-content-between align-items-center' key={product._id}>
                      <Link href={product.slug} style={{ color: "black" }}>
                        <div className='d-flex' style={{ cursor: "pointer" }}>
                          <img src={product.image[0]} width={120} height={100} style={{ borderRadius: "5px" }} />
                          <div style={{ marginLeft: "20px" }}>
                            <p>{product.title}</p>
                            <p>{product.description.slice(0, 200)}...</p>
                          </div>
                        </div>
                      </Link>

                      <div className='d-flex flex-column'>
                        <Button size='sm' className="btn-success" style={{ borderRadius: "5px" }}>
                          Add to cart
                        </Button>

                        <Button
                          size='sm'
                          className="btn-danger mt-3"
                          style={{ borderRadius: "5px" }}
                          onClick={() => handleRemoveWishlist(product._id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </Container>

              {wishlistData.length === 0 &&
                <>
                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h3>You have no products in your wishlist.</h3>
                    <Link href="/">
                      <Button className='btn btn-success mt-3'>Go to shopping</Button>
                    </Link>
                  </div>
                </>
              }

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

  // fetch user data from server
  const { data } = await axios.get(`${baseURL}/user/get-user-wishlist`, { headers: { "Authorization": `Bearer ${req.cookies.token}` } })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      wishlistData: data.wishlist,
      token: req.cookies.token
    },
  }
}

export default UserWishlist;
