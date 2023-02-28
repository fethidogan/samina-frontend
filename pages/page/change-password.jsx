import Head from 'next/head';
import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Table, Input, FormGroup, Label, Form } from 'reactstrap';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { baseURL } from '../../constants/baseurl';
import { toast } from 'react-toastify';


const ChangePassword = ({ token }) => {
  // ROUTER
  const router = useRouter()

  // STATES
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  // RESET REQUEST
  const handleChangePassword = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (newPassword !== confirmPassword) {
      return setError("Passwords doesn't match !")
    }

    try {
      await axios.post(`${baseURL}/user/change-user-password`,
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
          confirmPassword: confirmPassword
        },
        { headers: { "Authorization": `Bearer ${token}` } })
      toast.success("Password succesfully changed.")
      setTimeout(() => {
        router.reload()
      }, 1500)

    } catch (error) {
      setLoading(false)
      setError(error.response.data.message)
      setTimeout(() => {
        setError("")
      }, 3500)
    }

  };

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
              <Form onSubmit={handleChangePassword}>

                <div className='mb-2'>
                  <Link href="/forgot-password" >
                    Forgot Password ?
                  </Link>
                </div>

                <div>
                  <Row>
                    <Col lg="6" className='mb-2'>
                      <Input
                        type='password'
                        placeholder='Current Password'
                        name='currentpassword'
                        id='currentpassword'
                        value={currentPassword}
                        minLength={8}
                        required
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg="6" className='mb-2'>
                      <Input
                        type='password'
                        placeholder='New Password'
                        name='newpassword'
                        id='newpassword'
                        required
                        value={newPassword}
                        minLength={8}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </Col>
                  </Row>
                </div>
                <div>
                  <Row>
                    <Col lg="6" className='mb-2'>
                      <Input
                        type='password'
                        placeholder='Confirm Password'
                        name='confirmpassword'
                        id='confirmpassword'
                        required
                        value={confirmPassword}
                        minLength={8}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Col>
                  </Row>
                </div>
                <p className='text-start text-danger'>{error}</p>
                <div className='d-flex justify-content-end mt-2'>
                  <Button type='submit' className='btn btn-success' disabled={loading}>Change Password</Button>
                </div>
              </Form>

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
      ...(await serverSideTranslations(locale, ['common'])),
      token: req.cookies.token
    },
  }
}


export default ChangePassword;
