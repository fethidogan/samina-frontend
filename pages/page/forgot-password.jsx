import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { CommonPath } from '../../Components/Constant';
import { baseURL } from '../../constants/baseurl';
import ThemeCustomizer from '../../Layout/Common/Customizer';
import Layout1 from '../../Layout/Layout1';

const ForgotPassword = () => {
  // ROUTER
  const router = useRouter()

  // STATES
  const [email, setEmail] = useState("")

  // ERROR
  const [error, setError] = useState("")

  // RESET PASSWORD REQUEST
  const handleResetPassword = async (e) => {
    e.preventDefault()

    try {
      await axios.post(`${baseURL}/auth/forgot-password`, {
        email: email
      })
      setError("")
      router.push(`/page/reset-password-sent?email=${email}`)
    } catch (error) {
      return setError(error.response.data.message)
    }
  }


  return (
    <>
      <Layout1>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
        </Head>
        <div className='login-section'>
          <div className='materialContainer'>
            <div className='box'>
              <div className='login-title'>
                <h2>Forgot Password</h2>
              </div>
              <Form onSubmit={handleResetPassword}>
                <p className='text-start'>E-Mail</p>
                <div className='input' style={{ marginTop: "-8px" }}>
                  <Input
                    type='text'
                    name='name'
                    placeholder='Your Email'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    className='is-invalid'
                    Fid='emailname'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className='spin'></span>
                </div>

                <p className='text-start' style={{ color: "red" }}>{error}</p>

                <div className='button login button-1'>
                  <Button>Send</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <ThemeCustomizer />
      </Layout1>
    </>
  );
};

export default ForgotPassword;
