import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { CommonPath } from '../../Components/Constant';
import RegisterSection from '../../Components/Pages/Register/RegisterSection';
import { baseURL } from '../../constants/baseurl';
import ThemeCustomizer from '../../Layout/Common/Customizer';
import Layout1 from '../../Layout/Layout1';

const Register = () => {
  // Router
  const router = useRouter()

  // STATES
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // ERROR
  const [error, setError] = useState("")

  // REGİSTER REQUEST
  const handleSubmit = async (e) => {
    e.preventDefault()

    // if passwords doesnt match
    if (password !== confirmPassword) {
      return setError("Passwords doesn't match !")
    }
    setError("")

    try {
      await axios.post(`${baseURL}/auth/register`, {
        fullName: fullName,
        email: email,
        password: password
      })
      router.push(`/page/verify-email?email=${email}`)
    } catch (error) {
      console.log(error)
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
                <h2>Register</h2>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className='input'>
                  <Input
                    placeholder='Full Name'
                    type='text'
                    name='name'
                    id='name'
                    required
                    minLength={5}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <span className='spin'></span>
                </div>

                {/* Email */}
                <div className='input'>
                  <Input
                    type='text'
                    name='name'
                    id='emailname'
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className='spin'></span>
                </div>

                {/* Password */}
                <div className='input'>
                  <Input
                    type='password'
                    name='pass'
                    id='pass'
                    placeholder='Password'
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className='spin'></span>
                </div>

                {/* Confirm Password */}
                <div className='input'>
                  <Input
                    type='password'
                    name='pass'
                    id='compass'
                    placeholder='Confirm Password'
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span className='spin'></span>
                </div>

                {/* Error */}
                <p className='text-start'>{error}</p>

                {/* Sign Up */}
                <div className='button login'>
                  <Button type='submit'>Sign Up</Button>
                </div>
              </Form>

              {/* Google and facebook signup */}
              {/* <p className='sign-category'>
            <span>{Orsignupwith}</span>
          </p> */}

              {/* <Row className='gx-md-3 gy-3'>
            <Col md='6'>
            <a href='www.facebook.com'>
                <div className='social-media fb-media'>
                  <img src='/assets/images/inner-page/facebook.png' className='img-fluid' alt='facebook' />
                  <h6>{Facebook}</h6>
                </div>
              </a>
            </Col>
            <Col md='6'>
              <a href='www.gmail.com'>
                <div className='social-media google-media'>
                  <img src='/assets/images/inner-page/google.png' className='img-fluid' alt='google' />
                  <h6>{Google}</h6>
                </div>
              </a>
            </Col>
          </Row> */}
              <p>
                <Link href={'/page/login'} className='theme-color'>
                  Already have an account ? Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <ThemeCustomizer />
      </Layout1>
    </>
  );
};

export async function getServerSideProps({ req }) {
  // if token exists redirect into homepage
  if (req.cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }
  return {
    props: {},
  };
}


export default Register;
