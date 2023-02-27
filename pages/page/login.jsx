import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { CommonPath } from '../../Components/Constant';
import LoginContain from '../../Components/Pages/Login/LoginContain';
import { baseURL } from '../../constants/baseurl';
import ThemeCustomizer from '../../Layout/Common/Customizer';
import Layout1 from '../../Layout/Layout1';

const Logins = () => {
  // ROUTER
  const router = useRouter();

  // STATES
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  // ERROR
  const [error, setError] = useState("")


  // LOGİN REQUEST
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { data } = await axios.get(`${baseURL}/auth/login?email=${email}&password=${password}`)
      setError("")

      await axios.post(`/api/getcookie`, { token: data.token },
        { withCredentials: true })

      // set maxage same with the server side cookie to prevent issues
      document.cookie = `email=${data.email}; max-age=${1000 * 60 * 53000}; path=/;`
      router.push("/")
    } catch (error) {
      setLoading(false)
      setError(error.response.data.message)
    }
  };

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
                <h2>Login</h2>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* Email */}
                <p className='text-start'>E-Mail</p>
                <div className='input' style={{ marginTop: "-8px" }}>
                  <Input
                    type='text'
                    placeholder='E-Mail'
                    name='name'
                    id='name'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Password */}
                <p className='text-start mt-4'>Password</p>
                <div className='input' style={{ marginTop: "-8px" }}>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={password}
                    minLength={8}
                    required
                    onChange={(e) => setPassword(e.target.value)} />
                </div>

                {/* Forgot password */}
                <Link href={`/page/forgot-password`} className='pass-forgot'>
                  Forgot your password ?
                </Link>

                {/* Login Button */}
                <p className='text-start' style={{ color: "red" }}>{error}</p>
                <div className='button login'>
                  <Button type='submit'>Login</Button>
                </div>
              </Form>

              {/* Facebook - Google Sign in */}
              {/* <AddAccountLink /> */}
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


export default Logins;
